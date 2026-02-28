# Data Flow Architecture - Complete Guide

## 📋 **Overview**

This document explains the complete data flow architecture in the digital invitation web application, from database to presentation layer.

**Tech Stack:**
- Next.js (App Router)
- TypeScript
- Supabase
- Repository Pattern

---

## 🏗️ **1. HIGH-LEVEL DATA FLOW DIAGRAM**

```
┌─────────────────────────────────────────────────────────────┐
│                    DATABASE LAYER                           │
│                    (Supabase PostgreSQL)                    │
│  - Stores raw data                                          │
│  - Tables: invitations, rsvps, guests, images, etc.        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  REPOSITORY LAYER                           │
│              (Data Access Abstraction)                      │
│                                                             │
│  Files: repositories/supabase/*.ts                          │
│  - SupabaseInvitationRepository                            │
│  - SupabaseRSVPRepository                                  │
│  - SupabaseGuestRepository                                 │
│  - SupabasePublicInvitationRepository                      │
│                                                             │
│  Responsibilities:                                          │
│  ✅ Execute database queries                               │
│  ✅ Handle database errors                                 │
│  ✅ Return typed data                                      │
│  ✅ Implement repository interfaces                        │
│  ❌ NO business logic                                      │
│  ❌ NO validation                                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    SERVICE LAYER                            │
│                 (Business Logic)                            │
│                                                             │
│  Files: services/*.ts                                       │
│  - InvitationService                                        │
│  - RSVPService                                             │
│  - GuestService                                            │
│  - PublicInvitationService                                 │
│                                                             │
│  Responsibilities:                                          │
│  ✅ Business logic                                         │
│  ✅ Data validation                                        │
│  ✅ Data transformation                                    │
│  ✅ Error handling                                         │
│  ✅ Orchestrate multiple repositories                      │
│  ❌ NO database queries                                    │
│  ❌ NO UI logic                                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              SERVER ACTIONS / API ROUTES                    │
│              (Server-Side Entry Points)                     │
│                                                             │
│  Files:                                                     │
│  - app/[slug]/actions.ts (Server Actions)                  │
│  - app/api/*/route.ts (API Routes)                         │
│                                                             │
│  Responsibilities:                                          │
│  ✅ Call service layer                                     │
│  ✅ Handle request/response                                │
│  ✅ Authentication/Authorization                           │
│  ✅ Return structured responses                            │
│  ❌ NO business logic (delegate to services)              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                PRESENTATION LAYER                           │
│           (Server Components / Layouts / Pages)             │
│                                                             │
│  Files:                                                     │
│  - app/[slug]/layout.tsx (Server Component)                │
│  - app/[slug]/page.tsx (Client Component)                  │
│  - app/dashboard/page.tsx                                  │
│                                                             │
│  Server Components:                                         │
│  ✅ Call services directly                                 │
│  ✅ Call server actions                                    │
│  ✅ Pass data to client components                         │
│                                                             │
│  Client Components:                                         │
│  ✅ Call server actions only                               │
│  ✅ Receive data from props                                │
│  ❌ NO direct service calls                                │
│  ❌ NO direct database access                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   UI COMPONENTS                             │
│                  (Pure Rendering)                           │
│                                                             │
│  Files: components/*.tsx                                    │
│                                                             │
│  Responsibilities:                                          │
│  ✅ Render UI based on props                               │
│  ✅ Handle user interactions                               │
│  ✅ Trigger callbacks/events                               │
│  ❌ NO data fetching                                       │
│  ❌ NO business logic                                      │
│  ❌ NO database access                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 **2. RESPONSIBILITY OF EACH LAYER**

### **A. DATABASE LAYER (Supabase)**

**Location:** External (Supabase Cloud)

**Responsibilities:**
- ✅ Store raw data in PostgreSQL tables
- ✅ Execute SQL queries
- ✅ Enforce database constraints
- ✅ Handle relationships (foreign keys)

**Does NOT:**
- ❌ Contain business logic
- ❌ Perform validation beyond schema
- ❌ Transform data

**Example Tables:**
```sql
- invitations
- rsvps
- guests
- images
- music
- rundowns
- stories
- gift_infos
- themes
- users
```

---

### **B. REPOSITORY LAYER**

**Location:** `repositories/supabase/*.ts`

**Purpose:** Abstract database access and provide a clean interface for data operations.

**Responsibilities:**
- ✅ **Execute database queries** using Supabase client
- ✅ **Handle database errors** (connection issues, query failures)
- ✅ **Return typed data** (TypeScript interfaces)
- ✅ **Implement repository interfaces** (IInvitationRepository, etc.)
- ✅ **Map database results** to domain models

**Does NOT:**
- ❌ Contain business logic
- ❌ Perform validation (beyond type checking)
- ❌ Transform data for UI
- ❌ Handle authentication/authorization

**Example:**
```typescript
// repositories/supabase/SupabasePublicInvitationRepository.ts

export class SupabasePublicInvitationRepository implements IPublicInvitationRepository {
  async findMetadataBySlug(slug: string): Promise<InvitationMetadata | null> {
    const supabase = createSupabaseServerClient();

    // ✅ Execute query
    const { data, error } = await supabase
      .from("invitations")
      .select("host_one_nickname, host_two_nickname, event_title, slug, event_date, images (*)")
      .eq("slug", slug)
      .limit(1);

    // ✅ Handle database errors
    if (error) {
      console.error("Error fetching invitation metadata:", error.message);
      return null;
    }

    // ✅ Return typed data
    return data[0] as InvitationMetadata;
  }
}
```

**Key Points:**
- Uses server-side Supabase client (`createSupabaseServerClient()`)
- No business logic (just query execution)
- Returns null or throws on error
- Type-safe return values

---

### **C. SERVICE LAYER**

**Location:** `services/*.ts`

**Purpose:** Contain business logic and orchestrate data operations.

**Responsibilities:**
- ✅ **Business logic** (rules, calculations, workflows)
- ✅ **Data validation** (beyond schema validation)
- ✅ **Data transformation** (format for UI, aggregate data)
- ✅ **Error handling** (user-friendly messages)
- ✅ **Orchestrate repositories** (combine multiple data sources)
- ✅ **Authorization checks** (user permissions)

**Does NOT:**
- ❌ Execute database queries directly
- ❌ Contain UI logic
- ❌ Import Supabase client

**Example:**
```typescript
// services/PublicInvitationService.ts

export class PublicInvitationService {
  private repository: IPublicInvitationRepository;

  constructor(repository?: IPublicInvitationRepository) {
    this.repository = repository || new SupabasePublicInvitationRepository();
  }

  async getInvitationMetadata(slug: string): Promise<InvitationMetadata | null> {
    try {
      // ✅ Validation
      if (!slug) {
        throw new Error("Slug is required");
      }

      // ✅ Call repository
      const metadata = await this.repository.findMetadataBySlug(slug);

      // ✅ Business logic (could add more here)
      // Example: Check if invitation is expired, apply filters, etc.

      return metadata;
    } catch (error: any) {
      // ✅ Error handling
      console.error("Error fetching invitation metadata:", error);
      return null;
    }
  }
}
```

**Key Points:**
- Depends on repository interface (not implementation)
- Contains validation and business rules
- Handles errors gracefully
- Can orchestrate multiple repositories

---

### **D. PRESENTATION LAYER**

**Location:** `app/**/*.tsx` (layouts, pages)

**Purpose:** Fetch data and pass it to UI components.

#### **D1. Server Components (layout.tsx, page.tsx)**

**Responsibilities:**
- ✅ **Call services directly** (server-side only)
- ✅ **Fetch data** for the page
- ✅ **Pass data** to client components via props
- ✅ **Generate metadata** (SEO, OG tags)

**Does NOT:**
- ❌ Contain business logic
- ❌ Call repositories directly
- ❌ Import Supabase client

**Example:**
```typescript
// app/[slug]/layout.tsx (Server Component)

import { publicInvitationService } from "@/services/PublicInvitationService";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;

  // ✅ Call service directly (server-side)
  const invitation = await publicInvitationService.getInvitationMetadata(slug);

  if (!invitation) {
    return { title: "Not Found" };
  }

  // ✅ Generate metadata
  return {
    title: `${invitation.host_one_nickname} ❤️ ${invitation.host_two_nickname}`,
    description: formatDate(invitation.event_date, true),
    // ... OG tags
  };
}
```

#### **D2. Client Components**

**Responsibilities:**
- ✅ **Call server actions** (not services directly)
- ✅ **Receive data** from props
- ✅ **Handle user interactions**
- ✅ **Manage local state**

**Does NOT:**
- ❌ Call services directly
- ❌ Call repositories
- ❌ Import Supabase client

**Example:**
```typescript
// app/[slug]/page.tsx (Client Component)

"use client";

import { getPublicInvitation } from "./actions"; // Server action

export default function InvitationPage() {
  useEffect(() => {
    const fetchData = async () => {
      // ✅ Call server action (not service)
      const { data, error } = await getPublicInvitation(slug, invId);
      
      if (data) {
        setInvitationData(data);
      }
    };
    
    fetchData();
  }, []);

  return <ThemeComponent />;
}
```

---

### **E. UI COMPONENTS**

**Location:** `components/*.tsx`

**Purpose:** Pure rendering based on props.

**Responsibilities:**
- ✅ **Render UI** based on props
- ✅ **Handle events** (onClick, onChange)
- ✅ **Trigger callbacks** passed via props
- ✅ **Manage local UI state** (modals, dropdowns)

**Does NOT:**
- ❌ Fetch data
- ❌ Contain business logic
- ❌ Call services or repositories
- ❌ Import Supabase client

**Example:**
```typescript
// components/InvitationCard.tsx

interface InvitationCardProps {
  invitation: InvitationData;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function InvitationCard({ invitation, onEdit, onDelete }: InvitationCardProps) {
  // ✅ Pure rendering
  return (
    <div className="card">
      <h2>{invitation.event_title}</h2>
      <p>{invitation.host_one_nickname} & {invitation.host_two_nickname}</p>
      
      {/* ✅ Trigger callbacks */}
      <button onClick={() => onEdit(invitation.id)}>Edit</button>
      <button onClick={() => onDelete(invitation.id)}>Delete</button>
    </div>
  );
}
```

---

## 🔄 **3. EXAMPLE FLOW: [slug] PAGE**

### **Scenario:** User visits invitation page

**URL:** `https://example.com/john-jane-wedding?id=abc123`

### **Step-by-Step Flow:**

```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Next.js receives request                           │
│ URL: /john-jane-wedding?id=abc123                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: layout.tsx - generateMetadata() (Server Component) │
│ File: app/[slug]/layout.tsx                                 │
│                                                             │
│ const slug = "john-jane-wedding"                           │
│                                                             │
│ // ✅ Call service                                         │
│ const invitation = await publicInvitationService           │
│   .getInvitationMetadata(slug);                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: PublicInvitationService.getInvitationMetadata()   │
│ File: services/PublicInvitationService.ts                  │
│                                                             │
│ // ✅ Validation                                           │
│ if (!slug) throw new Error("Slug is required");           │
│                                                             │
│ // ✅ Call repository                                      │
│ return await this.repository.findMetadataBySlug(slug);    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: SupabasePublicInvitationRepository                │
│ File: repositories/supabase/SupabasePublicInvitationRepo  │
│                                                             │
│ // ✅ Execute database query                               │
│ const { data, error } = await supabase                     │
│   .from("invitations")                                     │
│   .select("host_one_nickname, ...")                        │
│   .eq("slug", slug)                                        │
│   .limit(1);                                               │
│                                                             │
│ // ✅ Handle errors                                        │
│ if (error) return null;                                    │
│                                                             │
│ // ✅ Return typed data                                    │
│ return data[0] as InvitationMetadata;                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 5: Supabase Database                                  │
│                                                             │
│ SELECT host_one_nickname, host_two_nickname, ...           │
│ FROM invitations                                            │
│ WHERE slug = 'john-jane-wedding'                           │
│ LIMIT 1;                                                    │
│                                                             │
│ Returns: { host_one_nickname: "John", ... }                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼ (Data flows back up)
┌─────────────────────────────────────────────────────────────┐
│ STEP 6: Repository returns data to Service                 │
│ InvitationMetadata object                                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 7: Service returns data to layout.tsx                 │
│ InvitationMetadata object                                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 8: layout.tsx generates metadata                      │
│                                                             │
│ return {                                                    │
│   title: "John ❤️ Jane",                                   │
│   description: "June 15, 2026",                            │
│   openGraph: { ... }                                        │
│ };                                                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 9: page.tsx renders (Client Component)                │
│ File: app/[slug]/page.tsx                                   │
│                                                             │
│ useEffect(() => {                                           │
│   // ✅ Call server action                                 │
│   const { data } = await getPublicInvitation(slug, invId);│
│   setInvitationData(data);                                 │
│ });                                                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 10: Server Action (app/[slug]/actions.ts)            │
│                                                             │
│ export async function getPublicInvitation(slug, id) {      │
│   // ✅ Call service                                       │
│   const invitation = await publicInvitationService         │
│     .getPublicInvitation(slug, id);                        │
│                                                             │
│   return { data: invitation, error: null };                │
│ }                                                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼ (Repeats steps 3-7 with full data)
┌─────────────────────────────────────────────────────────────┐
│ STEP 11: page.tsx receives full invitation data            │
│ Sets state and renders theme component                     │
│                                                             │
│ return <ThemeComponent />                                   │
└─────────────────────────────────────────────────────────────┘
```

### **Where Validation Happens:**
- **Service Layer** (Step 3): Input validation (`if (!slug)`)
- **Repository Layer** (Step 4): Type checking, error handling

### **Where Error Handling Happens:**
- **Repository Layer** (Step 4): Database errors
- **Service Layer** (Step 3): Business logic errors, wraps repository errors
- **Server Action** (Step 10): Returns structured error response
- **Page Component** (Step 9): Displays error to user

---

## 🖥️ **4. SERVER VS CLIENT RESPONSIBILITY**

### **A. Server-Side Only (MUST run on server)**

**Components:**
- ✅ Repository Layer
- ✅ Service Layer (when called directly)
- ✅ Server Actions
- ✅ API Routes
- ✅ Server Components (layout.tsx, page.tsx without "use client")

**Why:**
- Access to environment variables (database credentials)
- Direct database access
- Sensitive business logic
- Performance (closer to database)

**Example:**
```typescript
// ✅ Server Component (no "use client")
import { publicInvitationService } from "@/services/PublicInvitationService";

export default async function ServerPage() {
  // ✅ Can call service directly
  const data = await publicInvitationService.getInvitationMetadata(slug);
  
  return <div>{data.title}</div>;
}
```

---

### **B. Client-Side (CAN run on client)**

**Components:**
- ✅ Client Components ("use client")
- ✅ UI Components
- ✅ Hooks (useState, useEffect)

**Restrictions:**
- ❌ Cannot call services directly
- ❌ Cannot call repositories
- ❌ Cannot import Supabase client
- ✅ Can ONLY call server actions

**Example:**
```typescript
// ✅ Client Component
"use client";

import { getPublicInvitation } from "./actions"; // Server action

export default function ClientPage() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // ✅ Call server action (not service)
    getPublicInvitation(slug, id).then(({ data }) => setData(data));
  }, []);
  
  return <div>{data?.title}</div>;
}
```

---

### **C. What Should NEVER Run on Client**

**❌ NEVER on Client:**
```typescript
// ❌ BAD: Direct database import
import db from "@/configs/db-config";

// ❌ BAD: Direct service import in client component
"use client";
import { invitationService } from "@/services/InvitationService";

// ❌ BAD: Direct repository import
import { SupabaseInvitationRepository } from "@/repositories/supabase/...";

// ❌ BAD: Supabase client in client component
import { createSupabaseClient } from "@/lib/supabase/client";
const supabase = createSupabaseClient();
await supabase.from("invitations").select("*");
```

**✅ CORRECT on Client:**
```typescript
// ✅ GOOD: Server action
"use client";
import { getInvitation } from "./actions";

const { data } = await getInvitation(id);
```

---

### **D. Security Implications**

**Why this matters:**

1. **Environment Variables**
   - Server: Can access `process.env.SUPABASE_SERVICE_KEY`
   - Client: Only `NEXT_PUBLIC_*` variables exposed

2. **Database Credentials**
   - Server: Full access to database
   - Client: Limited by Row Level Security (RLS)

3. **Business Logic**
   - Server: Protected, not visible to users
   - Client: Visible in browser, can be manipulated

4. **Performance**
   - Server: Direct database connection
   - Client: HTTP requests, slower

---

## 📁 **5. BEST PRACTICE RECOMMENDATIONS**

### **A. Folder Structure**

```
project-root/
├── app/
│   ├── [slug]/
│   │   ├── actions.ts           # Server actions for this route
│   │   ├── layout.tsx           # Server component (metadata)
│   │   └── page.tsx             # Client component (UI)
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── my-invitations/
│   │       └── page.tsx
│   └── api/
│       └── invitations/
│           └── route.ts         # API route
│
├── repositories/
│   ├── interfaces/              # Repository contracts
│   │   ├── IInvitationRepository.ts
│   │   ├── IRSVPRepository.ts
│   │   └── IGuestRepository.ts
│   ├── supabase/               # Supabase implementations
│   │   ├── SupabaseInvitationRepository.ts
│   │   ├── SupabaseRSVPRepository.ts
│   │   └── SupabaseGuestRepository.ts
│   └── RepositoryFactory.ts    # Factory for creating repos
│
├── services/
│   ├── InvitationService.ts
│   ├── RSVPService.ts
│   ├── GuestService.ts
│   └── PublicInvitationService.ts
│
├── lib/
│   └── supabase/
│       ├── client.ts           # Client-side Supabase
│       └── server.ts           # Server-side Supabase
│
├── components/                 # Pure UI components
│   ├── InvitationCard.tsx
│   ├── RSVPForm.tsx
│   └── GuestList.tsx
│
├── types/
│   ├── invitation-data.ts
│   ├── rsvp-column.ts
│   └── guest-column.ts
│
└── docs/
    ├── REPOSITORY_PATTERN.md
    ├── DATA_FLOW_ARCHITECTURE.md
    └── QUICK_START.md
```

---

### **B. Naming Conventions**

#### **Repositories:**
```typescript
// Interface
IEntityRepository.ts

// Implementation
SupabaseEntityRepository.ts
PrismaEntityRepository.ts (future)
```

#### **Services:**
```typescript
EntityService.ts

// Export singleton
export const entityService = new EntityService();
```

#### **Server Actions:**
```typescript
// File: actions.ts
export async function getEntity(id: number) { }
export async function createEntity(data: CreateDTO) { }
export async function updateEntity(id: number, data: UpdateDTO) { }
export async function deleteEntity(id: number) { }
```

#### **DTOs (Data Transfer Objects):**
```typescript
// In repository interface file
export interface CreateEntityDTO { }
export interface UpdateEntityDTO { }
```

---

### **C. Error Handling Strategy**

#### **1. Repository Layer**
```typescript
async findById(id: number): Promise<Entity | null> {
  const { data, error } = await supabase
    .from("entities")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    // Log error
    console.error("Database error:", error.message);
    
    // Return null or throw
    if (error.code === "PGRST116") {
      return null; // Not found
    }
    throw new Error(`Failed to fetch entity: ${error.message}`);
  }

  return data as Entity;
}
```

#### **2. Service Layer**
```typescript
async getEntity(id: number): Promise<Entity | null> {
  try {
    // Validation
    if (!id || id < 1) {
      throw new Error("Invalid entity ID");
    }

    // Call repository
    const entity = await this.repository.findById(id);

    // Business logic
    if (entity && !entity.is_active) {
      throw new Error("Entity is not active");
    }

    return entity;
  } catch (error: any) {
    // Log error
    console.error("Service error:", error);
    
    // Re-throw or return null
    throw error;
  }
}
```

#### **3. Server Action**
```typescript
export async function getEntity(id: number) {
  try {
    const entity = await entityService.getEntity(id);
    
    return {
      data: entity,
      error: null,
    };
  } catch (error: any) {
    return {
      data: null,
      error: error.message || "Failed to fetch entity",
    };
  }
}
```

#### **4. Client Component**
```typescript
const { data, error } = await getEntity(id);

if (error) {
  toast.error(error);
  return;
}

if (!data) {
  toast.error("Entity not found");
  return;
}

// Use data
setEntity(data);
```

---

### **D. Scalability Considerations**

#### **1. Caching Strategy**

**Service Layer Caching:**
```typescript
export class InvitationService {
  private cache = new Map<number, InvitationData>();

  async getInvitationById(id: number): Promise<InvitationData | null> {
    // Check cache
    if (this.cache.has(id)) {
      return this.cache.get(id)!;
    }

    // Fetch from repository
    const invitation = await this.repository.findById(id);

    // Cache result
    if (invitation) {
      this.cache.set(id, invitation);
    }

    return invitation;
  }
}
```

#### **2. Pagination**

**Repository Layer:**
```typescript
interface PaginationOptions {
  page: number;
  limit: number;
}

async findAll(options: PaginationOptions): Promise<Entity[]> {
  const { page, limit } = options;
  const offset = (page - 1) * limit;

  const { data, error } = await supabase
    .from("entities")
    .select("*")
    .range(offset, offset + limit - 1);

  if (error) throw new Error(error.message);
  return data as Entity[];
}
```

#### **3. Batch Operations**

**Service Layer:**
```typescript
async createManyEntities(entities: CreateEntityDTO[]): Promise<Entity[]> {
  // Validate all
  entities.forEach(entity => this.validate(entity));

  // Batch create
  return await this.repository.createMany(entities);
}
```

#### **4. Database Connection Pooling**

Already handled by Supabase client, but for custom implementations:
```typescript
// lib/supabase/server.ts
export function createSupabaseServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      db: {
        schema: 'public',
      },
      auth: {
        persistSession: false,
      },
    }
  );
}
```

---

## 📊 **6. COMPLETE FLOW SUMMARY**

### **Data Fetching Flow:**
```
User Request
    ↓
Next.js Router
    ↓
Server Component / Server Action
    ↓
Service Layer (validation, business logic)
    ↓
Repository Layer (database query)
    ↓
Supabase Database
    ↓ (returns data)
Repository Layer (type mapping)
    ↓
Service Layer (transformation)
    ↓
Server Component / Server Action
    ↓
Client Component (via props or server action)
    ↓
UI Component (rendering)
```

### **Data Mutation Flow:**
```
User Action (button click)
    ↓
Client Component (event handler)
    ↓
Server Action
    ↓
Service Layer (validation, business logic)
    ↓
Repository Layer (database mutation)
    ↓
Supabase Database
    ↓ (returns result)
Repository Layer
    ↓
Service Layer
    ↓
Server Action (returns response)
    ↓
Client Component (updates UI)
```

---

## ✅ **7. CHECKLIST FOR CLEAN ARCHITECTURE**

### **When Creating a New Feature:**

- [ ] Define repository interface in `repositories/interfaces/`
- [ ] Implement repository in `repositories/supabase/`
- [ ] Add repository to `RepositoryFactory`
- [ ] Create service in `services/`
- [ ] Create server actions in `app/*/actions.ts` (if needed)
- [ ] Update server components to use service
- [ ] Update client components to use server actions
- [ ] Create pure UI components in `components/`
- [ ] Add TypeScript types in `types/`
- [ ] Write tests for service and repository
- [ ] Update documentation

### **Code Review Checklist:**

- [ ] No direct database imports in components
- [ ] No Supabase client in client components
- [ ] Services depend on interfaces, not implementations
- [ ] Proper error handling at each layer
- [ ] Type-safe operations throughout
- [ ] Server actions for client-server communication
- [ ] Pure UI components (no data fetching)

---

## 🎯 **8. KEY TAKEAWAYS**

1. **Separation of Concerns**
   - Each layer has a single responsibility
   - No layer should bypass another

2. **Server vs Client**
   - Database access ONLY on server
   - Client components use server actions

3. **Type Safety**
   - TypeScript interfaces at every layer
   - DTOs for data transfer

4. **Error Handling**
   - Handle errors at appropriate layer
   - Provide user-friendly messages

5. **Scalability**
   - Easy to add caching
   - Easy to switch databases
   - Easy to add new features

6. **Testability**
   - Mock repositories for testing
   - Test business logic in isolation

---

**This architecture ensures:**
- ✅ Clean, maintainable code
- ✅ Type-safe operations
- ✅ Easy testing
- ✅ Database independence
- ✅ Scalability
- ✅ Security

---

**Last Updated:** 2026-02-14  
**Version:** 1.0
