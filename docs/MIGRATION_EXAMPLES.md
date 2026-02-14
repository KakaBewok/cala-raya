# Migration Example: Refactoring to Repository Pattern

## Example: Dashboard Page

### ❌ BEFORE (Direct Supabase Access)

```typescript
// app/(admin)/dashboard/page.tsx
"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import InvitationData from "@/types/invitation-data";

const DashboardPage = () => {
  const [invitations, setInvitations] = useState<InvitationData[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchInvitations();
  }, []);

  const fetchInvitations = async () => {
    try {
      // ❌ Direct Supabase call in UI component
      const { data, error } = await supabase
        .from("invitations")
        .select(`
          *,
          themes (*),
          music (*),
          images (*),
          rundowns (*),
          gift_infos (*),
          stories (*),
          guests (*),
          rsvps (*)
        `)
        .eq("user_id", userId);

      if (error) throw error;
      setInvitations(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate stats directly in component
  const totalGuests = invitations.reduce(
    (sum, inv) => sum + (inv.guests?.length || 0),
    0
  );

  return <div>{/* UI */}</div>;
};
```

### ✅ AFTER (Using Repository Pattern)

```typescript
// app/(admin)/dashboard/page.tsx
"use client";

import { invitationService } from "@/services/InvitationService";
import { useEffect, useState } from "react";
import InvitationData from "@/types/invitation-data";

const DashboardPage = () => {
  const [invitations, setInvitations] = useState<InvitationData[]>([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // ✅ Clean service call - no database knowledge
      const [invitationsData, statsData] = await Promise.all([
        invitationService.getUserInvitations(userId),
        invitationService.getUserStatistics(userId),
      ]);

      setInvitations(invitationsData);
      setStats(statsData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return <div>{/* UI */}</div>;
};
```

---

## Example: API Route

### ❌ BEFORE

```typescript
// app/api/invitations/route.ts
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createClient();

  // ❌ Direct database logic in API route
  const { data, error } = await supabase
    .from("invitations")
    .select(`
      *,
      themes (*),
      music (*),
      images (*),
      rundowns (*),
      gift_infos (*),
      stories (*),
      guests (*),
      rsvps (*)
    `)
    .eq("user_id", userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const supabase = createClient();
  const body = await request.json();

  // ❌ Complex database logic scattered in API route
  const { data: invitation, error } = await supabase
    .from("invitations")
    .insert({
      user_id: body.user_id,
      theme_id: body.theme_id,
      // ... many fields
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // ❌ More database calls for related data
  if (body.music) {
    await supabase.from("music").insert({
      invitation_id: invitation.id,
      ...body.music,
    });
  }

  if (body.images) {
    await supabase.from("images").insert(
      body.images.map((img) => ({
        ...img,
        invitation_id: invitation.id,
      }))
    );
  }

  return NextResponse.json(invitation);
}
```

### ✅ AFTER

```typescript
// app/api/invitations/route.ts
import { invitationService } from "@/services/InvitationService";
import { NextResponse } from "next/server";
import { CreateInvitationDTO } from "@/repositories/interfaces/IInvitationRepository";

export async function GET(request: Request) {
  try {
    // ✅ Clean service call
    const invitations = await invitationService.getUserInvitations(userId);
    return NextResponse.json(invitations);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: CreateInvitationDTO = await request.json();

    // ✅ Service handles all complexity
    const invitation = await invitationService.createInvitation(body);

    return NextResponse.json(invitation, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
```

---

## Example: Custom Hook

### ❌ BEFORE

```typescript
// hooks/use-invitations.ts
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export const useInvitations = (userId: number) => {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchInvitations();
  }, [userId]);

  const fetchInvitations = async () => {
    // ❌ Direct Supabase in hook
    const { data } = await supabase
      .from("invitations")
      .select("*")
      .eq("user_id", userId);

    setInvitations(data || []);
    setLoading(false);
  };

  const createInvitation = async (invitationData) => {
    // ❌ More Supabase logic
    const { data, error } = await supabase
      .from("invitations")
      .insert(invitationData)
      .select()
      .single();

    if (!error) {
      setInvitations([...invitations, data]);
    }
    return { data, error };
  };

  return { invitations, loading, createInvitation };
};
```

### ✅ AFTER

```typescript
// hooks/use-invitations.ts
import { invitationService } from "@/services/InvitationService";
import { useEffect, useState } from "react";
import InvitationData from "@/types/invitation-data";
import { CreateInvitationDTO } from "@/repositories/interfaces/IInvitationRepository";

export const useInvitations = (userId: number) => {
  const [invitations, setInvitations] = useState<InvitationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInvitations();
  }, [userId]);

  const fetchInvitations = async () => {
    try {
      setLoading(true);
      // ✅ Clean service call
      const data = await invitationService.getUserInvitations(userId);
      setInvitations(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createInvitation = async (invitationData: CreateInvitationDTO) => {
    try {
      // ✅ Service handles validation and creation
      const newInvitation = await invitationService.createInvitation(invitationData);
      setInvitations([...invitations, newInvitation]);
      return { data: newInvitation, error: null };
    } catch (err: any) {
      return { data: null, error: err.message };
    }
  };

  const deleteInvitation = async (id: number) => {
    try {
      await invitationService.deleteInvitation(id);
      setInvitations(invitations.filter((inv) => inv.id !== id));
      return { success: true, error: null };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  };

  return {
    invitations,
    loading,
    error,
    createInvitation,
    deleteInvitation,
    refetch: fetchInvitations,
  };
};
```

---

## Key Improvements

### 1. **Separation of Concerns**
- UI components don't know about database
- Services contain business logic
- Repositories handle data access

### 2. **Error Handling**
- Centralized in service layer
- Consistent error messages
- Easy to add logging

### 3. **Type Safety**
- DTOs for data transfer
- Interfaces for contracts
- No `any` types

### 4. **Testability**
- Easy to mock services
- No database needed for UI tests
- Clear dependencies

### 5. **Maintainability**
- Change database? Update repository only
- Add validation? Update service only
- UI changes? No impact on data layer

---

## Migration Checklist

For each file with Supabase calls:

- [ ] Identify all database operations
- [ ] Move to appropriate repository
- [ ] Create/update service methods
- [ ] Update component to use service
- [ ] Remove Supabase import
- [ ] Test thoroughly
- [ ] Update error handling

---

## Common Patterns

### Pattern 1: Fetch Data on Mount
```typescript
// ✅ GOOD
useEffect(() => {
  const fetchData = async () => {
    const data = await invitationService.getUserInvitations(userId);
    setData(data);
  };
  fetchData();
}, [userId]);
```

### Pattern 2: Create with Validation
```typescript
// ✅ GOOD
const handleCreate = async (formData) => {
  try {
    // Service handles validation
    const result = await invitationService.createInvitation(formData);
    toast.success("Created successfully");
    router.push(`/invitations/${result.id}`);
  } catch (error) {
    toast.error(error.message);
  }
};
```

### Pattern 3: Update with Optimistic UI
```typescript
// ✅ GOOD
const handleUpdate = async (id, updates) => {
  // Optimistic update
  setInvitations(prev => 
    prev.map(inv => inv.id === id ? { ...inv, ...updates } : inv)
  );

  try {
    await invitationService.updateInvitation(id, updates);
  } catch (error) {
    // Revert on error
    fetchInvitations();
    toast.error(error.message);
  }
};
```

---

**Remember:** The goal is clean, maintainable, testable code. Take it step by step!
