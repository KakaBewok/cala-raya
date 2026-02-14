# Quick Reference - Data Flow Architecture

## 🚀 **Quick Start Guide**

### **1. The Golden Rules**

```
❌ NEVER DO THIS:
- Import database in components
- Call repositories from UI
- Use Supabase client in client components
- Put business logic in repositories
- Put database queries in services

✅ ALWAYS DO THIS:
- Use services in server components
- Use server actions in client components
- Keep UI components pure (props only)
- Handle errors at each layer
- Use TypeScript types everywhere
```

---

## 📊 **Simple Flow Diagram**

```
┌──────────────┐
│   DATABASE   │  ← Raw data storage
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  REPOSITORY  │  ← Execute queries, return typed data
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   SERVICE    │  ← Business logic, validation
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ SERVER ACTION│  ← Server-client bridge
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  COMPONENT   │  ← Render UI
└──────────────┘
```

---

## 🎯 **Layer Responsibilities (One-Liner)**

| Layer | Responsibility | Example |
|-------|---------------|---------|
| **Database** | Store data | PostgreSQL tables |
| **Repository** | Execute queries | `findById()`, `create()` |
| **Service** | Business logic | Validation, transformation |
| **Server Action** | Server-client bridge | `getInvitation()` |
| **Component** | Render UI | Display data |

---

## 💻 **Code Examples**

### **Repository (Data Access)**
```typescript
// repositories/supabase/SupabaseInvitationRepository.ts
async findById(id: number): Promise<Invitation | null> {
  const { data, error } = await supabase
    .from("invitations")
    .select("*")
    .eq("id", id)
    .single();
    
  if (error) return null;
  return data;
}
```

### **Service (Business Logic)**
```typescript
// services/InvitationService.ts
async getInvitation(id: number): Promise<Invitation | null> {
  if (!id) throw new Error("ID required");
  
  const invitation = await this.repository.findById(id);
  
  if (invitation && !invitation.is_active) {
    throw new Error("Invitation not active");
  }
  
  return invitation;
}
```

### **Server Action (Server-Client Bridge)**
```typescript
// app/[slug]/actions.ts
"use server";

export async function getInvitation(id: number) {
  try {
    const data = await invitationService.getInvitation(id);
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}
```

### **Server Component (Direct Service Call)**
```typescript
// app/[slug]/layout.tsx
import { publicInvitationService } from "@/services/PublicInvitationService";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  
  // ✅ Call service directly (server-side)
  const invitation = await publicInvitationService.getInvitationMetadata(slug);
  
  return { title: invitation.event_title };
}
```

### **Client Component (Server Action Call)**
```typescript
// app/[slug]/page.tsx
"use client";

import { getInvitation } from "./actions";

export default function Page() {
  useEffect(() => {
    // ✅ Call server action (not service)
    getInvitation(id).then(({ data }) => setData(data));
  }, []);
  
  return <div>{data?.title}</div>;
}
```

### **UI Component (Pure Rendering)**
```typescript
// components/InvitationCard.tsx
interface Props {
  invitation: Invitation;
  onEdit: () => void;
}

export function InvitationCard({ invitation, onEdit }: Props) {
  return (
    <div>
      <h2>{invitation.title}</h2>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}
```

---

## 🔄 **Common Patterns**

### **Pattern 1: Fetch Data in Server Component**
```typescript
// Server Component
import { invitationService } from "@/services/InvitationService";

export default async function Page() {
  const invitations = await invitationService.getUserInvitations(userId);
  
  return <InvitationList invitations={invitations} />;
}
```

### **Pattern 2: Fetch Data in Client Component**
```typescript
// Client Component
"use client";

import { getInvitations } from "./actions";

export default function Page() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getInvitations(userId).then(({ data }) => setData(data));
  }, []);
  
  return <InvitationList invitations={data} />;
}
```

### **Pattern 3: Create/Update Data**
```typescript
// Client Component
"use client";

import { createInvitation } from "./actions";

export default function CreateForm() {
  const handleSubmit = async (formData) => {
    const { data, error } = await createInvitation(formData);
    
    if (error) {
      toast.error(error);
      return;
    }
    
    toast.success("Created!");
    router.push(`/invitations/${data.id}`);
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## 📁 **File Organization**

```
/repositories
  /interfaces
    IInvitationRepository.ts      ← Contract
  /supabase
    SupabaseInvitationRepository.ts ← Implementation
  RepositoryFactory.ts             ← Factory

/services
  InvitationService.ts             ← Business logic
  
/app
  /[slug]
    actions.ts                     ← Server actions
    layout.tsx                     ← Server component
    page.tsx                       ← Client component
    
/components
  InvitationCard.tsx               ← Pure UI
```

---

## ⚡ **Quick Decision Tree**

```
Need to fetch data?
├─ In Server Component?
│  └─ ✅ Call service directly
│     import { invitationService } from "@/services/InvitationService";
│     const data = await invitationService.getInvitation(id);
│
└─ In Client Component?
   └─ ✅ Call server action
      import { getInvitation } from "./actions";
      const { data } = await getInvitation(id);

Need to create UI?
└─ ✅ Create pure component
   - Receive data via props
   - Trigger callbacks for actions
   - No data fetching inside
```

---

## 🚫 **Common Mistakes**

### **Mistake 1: Direct DB in Component**
```typescript
// ❌ BAD
import db from "@/configs/db-config";

export default function Page() {
  const data = await db.from("invitations").select("*");
  return <div>{data}</div>;
}
```

### **Mistake 2: Service in Client Component**
```typescript
// ❌ BAD
"use client";
import { invitationService } from "@/services/InvitationService";

export default function Page() {
  const data = await invitationService.getInvitation(id);
  return <div>{data}</div>;
}
```

### **Mistake 3: Business Logic in Repository**
```typescript
// ❌ BAD
async findById(id: number) {
  const data = await supabase.from("invitations").select("*");
  
  // ❌ Business logic in repository
  if (!data.is_active) {
    throw new Error("Not active");
  }
  
  return data;
}
```

---

## ✅ **Correct Implementations**

### **Correct 1: Service in Server Component**
```typescript
// ✅ GOOD
import { invitationService } from "@/services/InvitationService";

export default async function Page() {
  const data = await invitationService.getInvitation(id);
  return <div>{data.title}</div>;
}
```

### **Correct 2: Server Action in Client Component**
```typescript
// ✅ GOOD
"use client";
import { getInvitation } from "./actions";

export default function Page() {
  const { data } = await getInvitation(id);
  return <div>{data.title}</div>;
}
```

### **Correct 3: Business Logic in Service**
```typescript
// ✅ GOOD - Service
async getInvitation(id: number) {
  const invitation = await this.repository.findById(id);
  
  // ✅ Business logic in service
  if (invitation && !invitation.is_active) {
    throw new Error("Not active");
  }
  
  return invitation;
}
```

---

## 🎯 **Remember**

1. **Server Components** → Call services directly
2. **Client Components** → Call server actions only
3. **Services** → Contain business logic
4. **Repositories** → Execute queries only
5. **UI Components** → Render props only

---

## 📚 **Full Documentation**

For complete details, see:
- `DATA_FLOW_ARCHITECTURE.md` - Complete guide
- `REPOSITORY_PATTERN.md` - Pattern details
- `QUICK_START.md` - API reference

---

**Last Updated:** 2026-02-14
