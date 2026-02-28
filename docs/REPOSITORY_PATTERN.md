# Repository Pattern Implementation Guide

## 📋 Overview

This document outlines the Repository Pattern architecture implemented in the digital invitation web app to improve scalability, maintainability, and database independence.

---

## 🎯 Goals Achieved

✅ **Decoupled business logic from Supabase**  
✅ **Centralized data access logic**  
✅ **Database-agnostic architecture**  
✅ **Improved scalability and maintainability**  
✅ **Easy database provider switching**

---

## 📁 Project Structure

```
/repositories
  /interfaces
    - IInvitationRepository.ts    # Contract for invitation operations
    - IRSVPRepository.ts           # Contract for RSVP operations
    - IGuestRepository.ts          # Contract for guest operations
  /supabase
    - SupabaseInvitationRepository.ts  # Supabase implementation
    - SupabaseRSVPRepository.ts        # TODO
    - SupabaseGuestRepository.ts       # TODO
  - RepositoryFactory.ts           # Factory for creating repositories

/services
  - InvitationService.ts           # Business logic for invitations
  - RSVPService.ts                 # TODO
  - GuestService.ts                # TODO

/lib
  /supabase
    - client.ts                    # Supabase client (isolated)

/types
  - invitation-data.ts             # Domain types
  - guest-column.ts
  - rsvp-column.ts

/app
  - (UI components - no direct DB access)
```

---

## 🏗️ Architecture Layers

### **Layer 1: UI Components**
- React components
- Pages
- No direct database access
- Calls Service Layer only

### **Layer 2: Service Layer**
- Business logic
- Validation
- Error handling
- Depends on Repository Interfaces (not implementations)

### **Layer 3: Repository Interface**
- Defines contracts
- Database-agnostic
- Pure TypeScript interfaces

### **Layer 4: Repository Implementation**
- Supabase-specific logic
- Implements repository interfaces
- Handles database mapping

### **Layer 5: Database**
- Supabase (current)
- Can be replaced with Prisma, Firebase, etc.

---

## 🔄 Dependency Flow

```
UI Component
    ↓
Service Layer (depends on IRepository)
    ↓
Repository Interface (contract)
    ↓
Repository Implementation (Supabase)
    ↓
Database (Supabase)
```

---

## 💡 Usage Examples

### **Example 1: Using Service in UI Component**

```typescript
// ❌ BAD: Direct Supabase call
import { createClient } from "@/lib/supabase/client";

const MyComponent = () => {
  const supabase = createClient();
  
  const fetchData = async () => {
    const { data } = await supabase
      .from("invitations")
      .select("*")
      .eq("user_id", userId);
  };
};

// ✅ GOOD: Using Service Layer
import { invitationService } from "@/services/InvitationService";

const MyComponent = () => {
  const fetchData = async () => {
    const invitations = await invitationService.getUserInvitations(userId);
  };
};
```

### **Example 2: Using Repository in Service**

```typescript
import { IInvitationRepository } from "@/repositories/interfaces/IInvitationRepository";
import RepositoryFactory from "@/repositories/RepositoryFactory";

export class InvitationService {
  private invitationRepository: IInvitationRepository;

  constructor() {
    // Get repository from factory
    this.invitationRepository = RepositoryFactory.getInvitationRepository();
  }

  async getUserInvitations(userId: number) {
    // Business logic here
    return await this.invitationRepository.findByUserId(userId);
  }
}
```

### **Example 3: Switching Database Provider**

```typescript
// In RepositoryFactory.ts

// Current: Supabase
static getInvitationRepository(): IInvitationRepository {
  return new SupabaseInvitationRepository();
}

// Future: Switch to Prisma (just change one line!)
static getInvitationRepository(): IInvitationRepository {
  return new PrismaInvitationRepository();
}

// No changes needed in:
// - UI components
// - Service layer
// - Business logic
```

---

## 📝 Step-by-Step Migration Plan

### **Phase 1: Setup Infrastructure** ✅ DONE
- [x] Create repository interfaces
- [x] Create Supabase implementations
- [x] Create repository factory
- [x] Create service layer examples

### **Phase 2: Migrate Invitation Module** (NEXT)
1. Identify all Supabase calls for invitations
2. Move logic to SupabaseInvitationRepository
3. Update UI components to use InvitationService
4. Test thoroughly

### **Phase 3: Migrate RSVP Module**
1. Implement SupabaseRSVPRepository
2. Create RSVPService
3. Update UI components
4. Test

### **Phase 4: Migrate Guest Module**
1. Implement SupabaseGuestRepository
2. Create GuestService
3. Update UI components
4. Test

### **Phase 5: Migrate Other Modules**
- Music
- Gallery (Images)
- Rundowns
- Stories
- Gift Info
- Themes

### **Phase 6: Cleanup**
- Remove all direct Supabase imports from UI
- Add comprehensive error handling
- Add logging
- Add caching if needed

---

## 🔧 Implementation Checklist

### **For Each Entity:**

1. **Create Interface**
   ```typescript
   // /repositories/interfaces/IEntityRepository.ts
   export interface IEntityRepository {
     findById(id: number): Promise<Entity | null>;
     findAll(): Promise<Entity[]>;
     create(data: CreateDTO): Promise<Entity>;
     update(id: number, data: UpdateDTO): Promise<Entity>;
     delete(id: number): Promise<boolean>;
   }
   ```

2. **Create Supabase Implementation**
   ```typescript
   // /repositories/supabase/SupabaseEntityRepository.ts
   export class SupabaseEntityRepository implements IEntityRepository {
     private supabase = createClient();
     
     async findById(id: number): Promise<Entity | null> {
       // Supabase-specific logic
     }
     // ... implement all methods
   }
   ```

3. **Add to Factory**
   ```typescript
   // /repositories/RepositoryFactory.ts
   static getEntityRepository(): IEntityRepository {
     return new SupabaseEntityRepository();
   }
   ```

4. **Create Service**
   ```typescript
   // /services/EntityService.ts
   export class EntityService {
     private repository: IEntityRepository;
     
     constructor() {
       this.repository = RepositoryFactory.getEntityRepository();
     }
     
     async getEntity(id: number) {
       // Business logic + validation
       return await this.repository.findById(id);
     }
   }
   ```

5. **Update UI Components**
   ```typescript
   // Remove: import { createClient } from "@/lib/supabase/client";
   // Add: import { entityService } from "@/services/EntityService";
   
   const data = await entityService.getEntity(id);
   ```

---

## 🎨 Benefits

### **1. Database Independence**
- Switch from Supabase to Prisma/Firebase with minimal changes
- Only update repository implementations
- Business logic remains untouched

### **2. Testability**
- Easy to mock repositories for testing
- Test business logic without database
- Create fake implementations for development

### **3. Maintainability**
- Clear separation of concerns
- Easy to locate database logic
- Consistent patterns across codebase

### **4. Scalability**
- Add new features without touching database layer
- Centralized error handling
- Easy to add caching, logging, etc.

### **5. Code Quality**
- Type-safe with TypeScript
- Clear contracts via interfaces
- Reduced code duplication

---

## ⚠️ Important Rules

### **DO:**
✅ Use services in UI components  
✅ Use repositories in services  
✅ Define clear interfaces  
✅ Handle errors in services  
✅ Use DTOs for data transfer  

### **DON'T:**
❌ Import Supabase client in UI components  
❌ Call repositories directly from UI  
❌ Mix business logic with database logic  
❌ Skip error handling  
❌ Use `any` types  

---

## 🧪 Testing Example

```typescript
// Mock repository for testing
class MockInvitationRepository implements IInvitationRepository {
  async findById(id: number): Promise<InvitationData | null> {
    return {
      id,
      host_one_name: "Test",
      // ... mock data
    };
  }
  // ... implement other methods
}

// Test service with mock
const service = new InvitationService(new MockInvitationRepository());
const result = await service.getInvitationById(1);
expect(result).toBeDefined();
```

---

## 🚀 Next Steps

1. **Complete RSVP Repository Implementation**
   - Create SupabaseRSVPRepository
   - Create RSVPService
   - Update RSVP components

2. **Complete Guest Repository Implementation**
   - Create SupabaseGuestRepository
   - Create GuestService
   - Update guest management components

3. **Migrate Existing Code**
   - Identify all direct Supabase calls
   - Refactor to use services
   - Remove Supabase imports from UI

4. **Add Error Handling**
   - Centralized error types
   - User-friendly error messages
   - Logging system

5. **Add Caching (Optional)**
   - Repository-level caching
   - Reduce database calls
   - Improve performance

---

## 📚 Additional Resources

- [Repository Pattern Explained](https://martinfowler.com/eaaCatalog/repository.html)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Dependency Injection in TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html)

---

## 🤝 Contributing

When adding new features:
1. Create interface first
2. Implement repository
3. Create service
4. Update UI to use service
5. Test thoroughly

---

**Last Updated:** 2026-02-13  
**Status:** Phase 1 Complete ✅
