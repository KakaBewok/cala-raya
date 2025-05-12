// import db from "@/configs/db-config";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/configs/auth";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const session = await getServerSession(authOptions);
//   if (session?.user.role !== "admin") {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   const { userId, newRole } = await req.json();

//   const { error } = await db
//     .from("users")
//     .update({ role: newRole })
//     .eq("id", userId);

//   if (error) {
//     return NextResponse.json(
//       { error: "Failed to update role" },
//       { status: 500 }
//     );
//   }

//   return NextResponse.json({ success: true });
// }
