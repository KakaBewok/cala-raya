import { ReactNode } from "react";
import AuthenticatedLayout from "./AuthLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}
