import { authOptions } from "@/configs/auth";
import { userService } from "@/services/UserService";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/**
 * GET /api/users/list
 * Returns a list of all users (admin-only).
 * Used by the invitation form's user-assignment dropdown.
 */
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Role check is enforced inside the service layer
    const users = await userService.getAllUsers(session.user.role || "USER");
    return NextResponse.json({ users }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // Distinguish forbidden from server errors
    if (err.message.includes("Forbidden")) {
      return NextResponse.json({ error: err.message }, { status: 403 });
    }
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
