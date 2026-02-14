# Quick Start Guide: Using the Repository Pattern

## 🚀 Getting Started

### Step 1: Import the Service

```typescript
// ✅ Import the service you need
import { invitationService } from "@/services/InvitationService";
import { rsvpService } from "@/services/RSVPService";
import { guestService } from "@/services/GuestService";
```

### Step 2: Use Service Methods

```typescript
// Example: Fetch invitations
const invitations = await invitationService.getUserInvitations(userId);

// Example: Create invitation
const newInvitation = await invitationService.createInvitation(data);

// Example: Get statistics
const stats = await invitationService.getUserStatistics(userId);
```

---

## 📚 Complete API Reference

### **InvitationService**

```typescript
// Get all invitations for a user
const invitations = await invitationService.getUserInvitations(userId);

// Get single invitation
const invitation = await invitationService.getInvitationById(id);

// Create invitation
const newInvitation = await invitationService.createInvitation({
  user_id: 1,
  theme_id: 1,
  host_one_name: "John Doe",
  host_one_nickname: "John",
  host_two_name: "Jane Smith",
  host_two_nickname: "Jane",
  event_title: "Wedding Celebration",
  event_date: "2026-06-15",
  event_type: "Wedding",
  location: "Grand Hotel",
  // ... other fields
});

// Update invitation
const updated = await invitationService.updateInvitation(id, {
  event_title: "Updated Title",
  location: "New Location",
});

// Delete invitation
await invitationService.deleteInvitation(id);

// Get active invitations
const activeInvitations = await invitationService.getActiveInvitations(userId);

// Toggle invitation status
await invitationService.toggleInvitationStatus(id, true); // activate
await invitationService.toggleInvitationStatus(id, false); // deactivate

// Get statistics
const stats = await invitationService.getUserStatistics(userId);
// Returns: { totalInvitations, totalGuests, totalRsvps, attending, notAttending, responseRate }
```

### **RSVPService**

```typescript
// Get all RSVPs for an invitation
const rsvps = await rsvpService.getInvitationRSVPs(invitationId);

// Get single RSVP
const rsvp = await rsvpService.getRSVPById(id);

// Create RSVP
const newRsvp = await rsvpService.createRSVP({
  invitation_id: 1,
  guest_name: "John Doe",
  message: "Looking forward to it!",
  attendance_status: true,
  total_guest: 2,
});

// Update RSVP
const updated = await rsvpService.updateRSVP(id, {
  attendance_status: false,
  message: "Sorry, can't make it",
});

// Delete RSVP
await rsvpService.deleteRSVP(id);

// Get statistics
const stats = await rsvpService.getStatistics(invitationId);
// Returns: { total, attending, notAttending, totalGuests }

// Get attending RSVPs only
const attending = await rsvpService.getAttendingRSVPs(invitationId);

// Get not attending RSVPs only
const notAttending = await rsvpService.getNotAttendingRSVPs(invitationId);

// Get recent RSVPs (for dashboard)
const recent = await rsvpService.getRecentRSVPs([invId1, invId2], 5);
```

### **GuestService**

```typescript
// Get all guests for an invitation
const guests = await guestService.getInvitationGuests(invitationId);

// Get single guest
const guest = await guestService.getGuestById(id);

// Create guest
const newGuest = await guestService.createGuest({
  invitation_id: 1,
  name: "John Doe",
  phone_number: "+1234567890",
  address: "123 Main St",
  notes: "VIP guest",
});

// Create multiple guests (bulk import)
const guests = await guestService.createManyGuests([
  { invitation_id: 1, name: "Guest 1", phone_number: "123" },
  { invitation_id: 1, name: "Guest 2", phone_number: "456" },
]);

// Update guest
const updated = await guestService.updateGuest(id, {
  name: "Updated Name",
  phone_number: "+9876543210",
});

// Delete guest
await guestService.deleteGuest(id);

// Delete multiple guests
await guestService.deleteManyGuests([id1, id2, id3]);

// Search guests by name
const results = await guestService.searchGuests(invitationId, "John");

// Get guest count
const count = await guestService.getGuestCount(invitationId);

// Import guests from Excel
const result = await guestService.importGuests(invitationId, [
  { name: "Guest 1", phone_number: "123" },
  { name: "Guest 2", phone_number: "456" },
]);
// Returns: { success: 2, failed: 0, errors: [], guests: [...] }
```

---

## 🎯 Common Use Cases

### Use Case 1: Dashboard Statistics

```typescript
"use client";

import { invitationService } from "@/services/InvitationService";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const userId = 1; // Get from session
      const statistics = await invitationService.getUserStatistics(userId);
      setStats(statistics);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Total Invitations: {stats.totalInvitations}</h1>
      <h2>Total Guests: {stats.totalGuests}</h2>
      <h2>Response Rate: {stats.responseRate}%</h2>
    </div>
  );
};
```

### Use Case 2: RSVP Page with Filtering

```typescript
"use client";

import { rsvpService } from "@/services/RSVPService";
import { useEffect, useState } from "react";

const RSVPPage = ({ invitationId }: { invitationId: number }) => {
  const [rsvps, setRsvps] = useState([]);
  const [filter, setFilter] = useState<"all" | "attending" | "not_attending">("all");

  useEffect(() => {
    fetchRSVPs();
  }, [filter]);

  const fetchRSVPs = async () => {
    try {
      let data;
      if (filter === "attending") {
        data = await rsvpService.getAttendingRSVPs(invitationId);
      } else if (filter === "not_attending") {
        data = await rsvpService.getNotAttendingRSVPs(invitationId);
      } else {
        data = await rsvpService.getInvitationRSVPs(invitationId);
      }
      setRsvps(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="attending">Attending</option>
        <option value="not_attending">Not Attending</option>
      </select>

      {rsvps.map((rsvp) => (
        <div key={rsvp.id}>
          {rsvp.guest_name} - {rsvp.attendance_status ? "✅" : "❌"}
        </div>
      ))}
    </div>
  );
};
```

### Use Case 3: Guest Management with Search

```typescript
"use client";

import { guestService } from "@/services/GuestService";
import { useState, useEffect } from "react";

const GuestManagement = ({ invitationId }: { invitationId: number }) => {
  const [guests, setGuests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchGuests();
  }, [searchTerm]);

  const searchGuests = async () => {
    try {
      const results = await guestService.searchGuests(invitationId, searchTerm);
      setGuests(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await guestService.deleteGuest(id);
      setGuests(guests.filter((g) => g.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleBulkDelete = async (ids: number[]) => {
    try {
      await guestService.deleteManyGuests(ids);
      setGuests(guests.filter((g) => !ids.includes(g.id)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search guests..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {guests.map((guest) => (
        <div key={guest.id}>
          {guest.name}
          <button onClick={() => handleDelete(guest.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
```

### Use Case 4: Excel Import

```typescript
"use client";

import { guestService } from "@/services/GuestService";
import { useState } from "react";

const GuestImport = ({ invitationId }: { invitationId: number }) => {
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState(null);

  const handleImport = async (file: File) => {
    setImporting(true);
    try {
      // Parse Excel file (use a library like xlsx)
      const parsedData = await parseExcelFile(file);

      // Import guests
      const importResult = await guestService.importGuests(
        invitationId,
        parsedData
      );

      setResult(importResult);
      alert(`Imported ${importResult.success} guests, ${importResult.failed} failed`);
    } catch (error) {
      console.error(error);
      alert("Import failed");
    } finally {
      setImporting(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) => e.target.files && handleImport(e.target.files[0])}
        disabled={importing}
      />

      {result && (
        <div>
          <p>Success: {result.success}</p>
          <p>Failed: {result.failed}</p>
          {result.errors.map((err) => (
            <div key={err.row}>
              Row {err.row}: {err.name} - {err.error}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

### Use Case 5: API Route

```typescript
// app/api/invitations/[id]/route.ts
import { invitationService } from "@/services/InvitationService";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const invitation = await invitationService.getInvitationById(
      parseInt(params.id)
    );

    if (!invitation) {
      return NextResponse.json(
        { error: "Invitation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(invitation);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await invitationService.deleteInvitation(parseInt(params.id));
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

---

## ⚠️ Error Handling

All service methods throw errors that should be caught:

```typescript
try {
  const invitation = await invitationService.getInvitationById(id);
} catch (error: any) {
  // Handle error
  console.error(error.message);
  toast.error("Failed to fetch invitation");
}
```

---

## 🧪 Testing

Mock services for testing:

```typescript
import { InvitationService } from "@/services/InvitationService";
import { IInvitationRepository } from "@/repositories/interfaces/IInvitationRepository";

// Create mock repository
const mockRepo: IInvitationRepository = {
  findById: jest.fn().mockResolvedValue({ id: 1, /* ... */ }),
  findByUserId: jest.fn().mockResolvedValue([]),
  // ... other methods
};

// Inject mock into service
const service = new InvitationService(mockRepo);

// Test
const result = await service.getInvitationById(1);
expect(result).toBeDefined();
```

---

## 📝 Best Practices

1. **Always use services in UI components**
2. **Handle errors properly**
3. **Use TypeScript types**
4. **Don't import Supabase client directly**
5. **Validate data in services**

---

**Ready to use!** Start replacing direct Supabase calls with service methods. 🚀
