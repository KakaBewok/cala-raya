# Prisma ORM Integration - Safe Migration Guide

## ✅ **Current Status: Infrastructure Ready**

Prisma is installed and configured. The remaining step is to connect to the existing database.

---

## 🏗️ **1. IMPROVED ARCHITECTURE**

```
┌─────────────────────────────────────────────────────────────┐
│                    DATABASE LAYER                           │
│               (PostgreSQL via Supabase)                     │
│  - Stores raw data                                          │
│  - Schema unchanged (introspected, not recreated)          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    PRISMA ORM                                │
│              (Type-Safe Database Client)                     │
│                                                             │
│  File: lib/prisma.ts (Singleton)                           │
│  - Auto-generated types from database schema               │
│  - Type-safe queries with autocomplete                     │
│  - Relation handling (joins)                                │
│  - Query building (where, include, select)                 │
│  - Connection pooling                                       │
│  - Transaction support                                      │
│                                                             │
│  ✅ Replaces: Supabase client queries                      │
│  ✅ Keeps: Same PostgreSQL database                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  REPOSITORY LAYER                           │
│              (Data Access Abstraction)                      │
│                                                             │
│  Files: repositories/prisma/*.ts                           │
│  - PrismaInvitationRepository                              │
│  - PrismaRSVPRepository                                    │
│  - PrismaGuestRepository                                   │
│  - PrismaPublicInvitationRepository                        │
│                                                             │
│  Responsibilities:                                          │
│  ✅ Call Prisma client                                     │
│  ✅ Return typed data                                      │
│  ✅ Handle database errors                                 │
│  ❌ NO business logic                                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    SERVICE LAYER                            │
│                 (Business Logic)                            │
│                                                             │
│  Files: services/*.ts                                       │
│  ✅ Business logic                                         │
│  ✅ Validation                                             │
│  ✅ Data transformation                                    │
│  ❌ NO database queries                                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│           SERVER ACTIONS / SERVER COMPONENTS                │
│                                                             │
│  ✅ Call services                                          │
│  ❌ NO direct Prisma calls                                 │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   UI COMPONENTS                             │
│  ✅ Pure rendering                                         │
│  ❌ NO data access                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔒 **2. SAFETY GUARANTEES**

### **What This Migration Does:**
- ✅ **Reads** the existing database schema (`prisma db pull`)
- ✅ **Generates** TypeScript types from existing tables
- ✅ **Creates** a Prisma client that connects to the same database
- ✅ **Replaces** Supabase JS queries with Prisma queries

### **What This Migration Does NOT Do:**
- ❌ Does NOT create new tables
- ❌ Does NOT drop existing tables
- ❌ Does NOT modify columns
- ❌ Does NOT alter relationships
- ❌ Does NOT delete any data
- ❌ Does NOT reset the database
- ❌ Does NOT run destructive migrations

### **Commands That Are SAFE:**
```bash
prisma db pull          # ✅ SAFE - Reads schema only
prisma generate         # ✅ SAFE - Generates client code only
prisma studio           # ✅ SAFE - Visual database browser
```

### **Commands to AVOID:**
```bash
prisma migrate reset    # ❌ DANGEROUS - Drops all data
prisma migrate dev      # ⚠️ CAUTION - May modify schema
prisma db push          # ⚠️ CAUTION - May modify schema
```

---

## 📋 **3. STEP-BY-STEP MIGRATION PLAN**

### **Step 1: Install Prisma** ✅ DONE
```bash
npm install prisma --save-dev
npm install @prisma/client
```

### **Step 2: Initialize Prisma** ✅ DONE
```bash
npx prisma init
```

### **Step 3: Configure Database URL** ⏳ NEEDS YOUR ACTION
You need to update the `.env` file with your actual Supabase database password.

**How to find it:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `rjxdgjhzzwrtkttxpfpz`
3. Go to **Project Settings** → **Database**
4. Find the **Connection string** section
5. Copy the **URI** connection string
6. Or just copy the **password** and replace `YOUR_DATABASE_PASSWORD` in `.env`

**Also check the region:**
- Your Supabase project region determines the pooler hostname
- Common regions: `aws-0-ap-southeast-1`, `aws-0-us-east-1`, etc.
- Check your Supabase Dashboard → Project Settings → Database → Connection string for the exact hostname

### **Step 4: Introspect Existing Database** ⏳ AFTER PASSWORD IS SET
```bash
npx prisma db pull
```

**What this does:**
- Connects to your PostgreSQL database (READ-ONLY operation)
- Reads the existing table structure
- Generates the `schema.prisma` with all your models
- Does NOT modify any data or schema

**Expected output:**
```
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "postgres", schema "public" at "aws-0-ap-southeast-1.pooler.supabase.com:5432"

Introspecting based on datasource defined in prisma/schema.prisma …

✅ Introspected X models and wrote them into prisma/schema.prisma
```

### **Step 5: Validate Generated Schema**
After introspection, review the generated `prisma/schema.prisma`:
- Verify all tables are present
- Check that relationships are correct
- Rename any awkward model names if needed

### **Step 6: Generate Prisma Client**
```bash
npx prisma generate
```

This generates TypeScript types and the query client. NO database changes.

### **Step 7: Create Prisma Repository Implementations**
Replace Supabase queries with Prisma queries in new repository files.

### **Step 8: Switch RepositoryFactory to Prisma**
Update `RepositoryFactory.ts` to use Prisma repositories instead of Supabase.

### **Step 9: Test Everything**
Test all existing functionality before removing old Supabase code.

### **Step 10: Clean Up**
Remove old Supabase-specific repository files and unused dependencies.

---

## 💻 **4. REPOSITORY IMPLEMENTATION WITH PRISMA**

Here is exactly how repositories will look after migration:

### **Example: PrismaInvitationRepository.ts**
```typescript
import prisma from "@/lib/prisma";
import { IInvitationRepository, CreateInvitationDTO, UpdateInvitationDTO } from "../interfaces/IInvitationRepository";
import InvitationData from "@/types/invitation-data";

export class PrismaInvitationRepository implements IInvitationRepository {

  async findByUserId(userId: number): Promise<InvitationData[]> {
    const invitations = await prisma.invitations.findMany({
      where: { user_id: userId },
      include: {
        themes: true,
        music: true,
        images: true,
        rundowns: true,
        gift_infos: true,
        stories: true,
        guests: true,
        rsvps: true,
      },
      orderBy: { created_at: "desc" },
    });

    return invitations as unknown as InvitationData[];
  }

  async findById(id: number): Promise<InvitationData | null> {
    const invitation = await prisma.invitations.findUnique({
      where: { id },
      include: {
        themes: true,
        music: true,
        images: true,
        rundowns: true,
        gift_infos: true,
        stories: true,
        guests: true,
        rsvps: true,
      },
    });

    return invitation as unknown as InvitationData | null;
  }

  async create(data: CreateInvitationDTO): Promise<InvitationData> {
    // Prisma supports nested creates in a single transaction!
    const invitation = await prisma.invitations.create({
      data: {
        user_id: data.user_id,
        theme_id: data.theme_id,
        host_one_name: data.host_one_name,
        host_one_nickname: data.host_one_nickname,
        host_one_additional_info: data.host_one_additional_info,
        host_one_social_media: data.host_one_social_media,
        host_two_name: data.host_two_name,
        host_two_nickname: data.host_two_nickname,
        host_two_additional_info: data.host_two_additional_info,
        host_two_social_media: data.host_two_social_media,
        event_title: data.event_title,
        event_date: data.event_date,
        event_type: data.event_type,
        location: data.location,
        location_url: data.location_url,
        location_detail: data.location_detail,
        message: data.message,
        hashtag: data.hashtag,
        // Nested creates - all in one transaction!
        images: data.images ? { create: data.images } : undefined,
        rundowns: data.rundowns ? { create: data.rundowns } : undefined,
        gift_infos: data.gift_infos ? { create: data.gift_infos } : undefined,
        stories: data.stories ? { create: data.stories } : undefined,
      },
      include: {
        themes: true,
        music: true,
        images: true,
        rundowns: true,
        gift_infos: true,
        stories: true,
        guests: true,
        rsvps: true,
      },
    });

    return invitation as unknown as InvitationData;
  }

  async update(id: number, data: UpdateInvitationDTO): Promise<InvitationData> {
    // Prisma transaction for atomic updates
    const invitation = await prisma.$transaction(async (tx) => {
      // Update main invitation
      await tx.invitations.update({
        where: { id },
        data: {
          host_one_name: data.host_one_name,
          host_one_nickname: data.host_one_nickname,
          // ... other fields
        },
      });

      // Replace images if provided
      if (data.images !== undefined) {
        await tx.images.deleteMany({ where: { invitation_id: id } });
        if (data.images.length > 0) {
          await tx.images.createMany({
            data: data.images.map((img) => ({
              ...img,
              invitation_id: id,
            })),
          });
        }
      }

      // Fetch complete result
      return tx.invitations.findUnique({
        where: { id },
        include: {
          themes: true,
          music: true,
          images: true,
          rundowns: true,
          gift_infos: true,
          stories: true,
          guests: true,
          rsvps: true,
        },
      });
    });

    return invitation as unknown as InvitationData;
  }

  async delete(id: number): Promise<boolean> {
    await prisma.invitations.delete({
      where: { id },
    });
    return true;
  }

  async findActiveByUserId(userId: number): Promise<InvitationData[]> {
    const invitations = await prisma.invitations.findMany({
      where: {
        user_id: userId,
        is_active: true,
      },
      include: {
        themes: true,
        music: true,
        images: true,
        rundowns: true,
        gift_infos: true,
        stories: true,
        guests: true,
        rsvps: true,
      },
      orderBy: { created_at: "desc" },
    });

    return invitations as unknown as InvitationData[];
  }

  async updateStatus(id: number, isActive: boolean): Promise<boolean> {
    await prisma.invitations.update({
      where: { id },
      data: { is_active: isActive },
    });
    return true;
  }
}
```

---

## 📊 **5. COMPARISON: SUPABASE vs PRISMA**

### **Query Comparison:**

| Operation | Supabase | Prisma |
|-----------|----------|--------|
| **Find by ID** | `supabase.from("invitations").select("*").eq("id", id).single()` | `prisma.invitations.findUnique({ where: { id } })` |
| **Find many** | `supabase.from("invitations").select("*").eq("user_id", userId)` | `prisma.invitations.findMany({ where: { user_id: userId } })` |
| **With relations** | `supabase.from("invitations").select("*, themes (*), images (*)")` | `prisma.invitations.findMany({ include: { themes: true, images: true } })` |
| **Create** | `supabase.from("invitations").insert({...}).select().single()` | `prisma.invitations.create({ data: {...} })` |
| **Update** | `supabase.from("invitations").update({...}).eq("id", id)` | `prisma.invitations.update({ where: { id }, data: {...} })` |
| **Delete** | `supabase.from("invitations").delete().eq("id", id)` | `prisma.invitations.delete({ where: { id } })` |
| **Transaction** | ❌ Not natively supported | ✅ `prisma.$transaction([...])` |
| **Type safety** | ⚠️ Manual types / `as any` casts | ✅ Auto-generated from schema |
| **Nested create** | ❌ Multiple queries | ✅ Single nested create |

### **Key Advantages of Prisma:**

1. **Full Type Safety**
   ```typescript
   // Supabase - no autocomplete, manual types
   const { data } = await supabase.from("invitations").select("*");
   const invitation = data as InvitationData; // Manual cast

   // Prisma - full autocomplete, auto-generated types
   const invitation = await prisma.invitations.findUnique({ where: { id } });
   // invitation is fully typed automatically!
   ```

2. **Transactions**
   ```typescript
   // Supabase - no transaction support, can fail mid-operation
   await supabase.from("images").delete().eq("invitation_id", id);
   await supabase.from("images").insert(newImages); // If this fails, data is lost!

   // Prisma - atomic transaction, all-or-nothing
   await prisma.$transaction(async (tx) => {
     await tx.images.deleteMany({ where: { invitation_id: id } });
     await tx.images.createMany({ data: newImages });
   }); // If anything fails, everything rolls back
   ```

3. **Relation Handling**
   ```typescript
   // Prisma nested create - one query, one transaction
   await prisma.invitations.create({
     data: {
       host_one_name: "John",
       images: {
         create: [
           { url: "photo1.jpg", type: "hero" },
           { url: "photo2.jpg", type: "gallery" },
         ],
       },
     },
   });
   ```

---

## 🛡️ **6. LONG-TERM MAINTENANCE STRATEGY**

### **A. Prisma Client Singleton**
Already implemented in `lib/prisma.ts`:
- Single connection across hot-reloads
- Development query logging
- Production error-only logging

### **B. Safe Schema Changes**
When you need to modify the database:

```bash
# 1. Make changes in Supabase Dashboard (or SQL editor)
# 2. Pull the updated schema
npx prisma db pull

# 3. Regenerate the client
npx prisma generate

# 4. Update repository code if needed
```

**Why this is safer than `prisma migrate dev`:**
- You control schema changes via Supabase UI
- `db pull` only reads, never writes
- No risk of accidental table drops

### **C. Production Deployment**
```bash
# In CI/CD pipeline:
prisma generate    # Generate client types
next build         # Build the app

# The 'build' script already includes 'prisma generate'
```

### **D. Versioning Strategy**
- Lock Prisma version in `package.json`
- Test schema introspection before deployments
- Keep `schema.prisma` in version control

### **E. Backward Compatibility**
- Supabase client can remain for Supabase Auth, Storage, Realtime
- Only database queries migrate to Prisma
- Repository interfaces remain unchanged
- Services remain unchanged

---

## 📁 **7. UPDATED FOLDER STRUCTURE**

```
project-root/
├── prisma/
│   └── schema.prisma            # Auto-generated from db pull
│
├── prisma.config.ts             # Prisma CLI configuration
│
├── lib/
│   ├── prisma.ts                # Prisma singleton client
│   ├── utils.ts                 # Utility functions
│   └── supabase/
│       ├── client.ts            # Supabase client (for Auth/Storage)
│       └── server.ts            # Supabase server (for Auth/Storage)
│
├── repositories/
│   ├── interfaces/              # Same interfaces (no changes)
│   │   ├── IInvitationRepository.ts
│   │   ├── IRSVPRepository.ts
│   │   ├── IGuestRepository.ts
│   │   └── IPublicInvitationRepository.ts
│   │
│   ├── prisma/                  # NEW - Prisma implementations
│   │   ├── PrismaInvitationRepository.ts
│   │   ├── PrismaRSVPRepository.ts
│   │   ├── PrismaGuestRepository.ts
│   │   └── PrismaPublicInvitationRepository.ts
│   │
│   ├── supabase/                # OLD - Kept until migration complete
│   │   ├── SupabaseInvitationRepository.ts
│   │   ├── SupabaseRSVPRepository.ts
│   │   ├── SupabaseGuestRepository.ts
│   │   └── SupabasePublicInvitationRepository.ts
│   │
│   └── RepositoryFactory.ts     # Switch here: Supabase → Prisma
│
├── services/                    # NO CHANGES needed
│   ├── InvitationService.ts
│   ├── RSVPService.ts
│   ├── GuestService.ts
│   └── PublicInvitationService.ts
│
└── app/                         # NO CHANGES needed
    ├── [slug]/
    │   ├── actions.ts
    │   ├── layout.tsx
    │   └── page.tsx
    └── (admin)/dashboard/
```

---

## ⚠️ **8. RISK ASSESSMENT**

### **Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Data loss during migration | **None** | - | `db pull` is read-only |
| Incorrect schema mapping | Low | Low | Review generated schema |
| Connection string exposure | Low | High | `.env` is gitignored |
| Breaking existing queries | Low | Medium | Keep Supabase repos until tested |
| Production downtime | **None** | - | Swap is at code level only |
| Incompatible types | Low | Low | Prisma generates types from actual schema |

### **Final Confirmation:**
- ✅ This approach will NOT damage existing data
- ✅ This is safe for production databases
- ✅ `prisma db pull` is a READ-ONLY operation
- ✅ No tables are created, dropped, or modified
- ✅ Rollback is trivial (revert RepositoryFactory)

---

## 🚀 **9. NEXT STEPS**

### **What YOU need to do:**

1. **Add your database password** to `.env`:
   - Replace `YOUR_DATABASE_PASSWORD` in `DATABASE_URL`
   - Replace `YOUR_DATABASE_PASSWORD` in `DIRECT_URL`
   - Also verify the region hostname matches your Supabase project

2. **Run introspection:**
   ```bash
   npx prisma db pull
   ```

3. **Generate the client:**
   ```bash
   npx prisma generate
   ```

4. **Tell me** the result, and I'll create the Prisma repository implementations.

---

**Status:** Infrastructure ready, awaiting database password  
**Last Updated:** 2026-02-16
