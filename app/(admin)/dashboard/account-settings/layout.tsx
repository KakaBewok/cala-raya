"use client";

import Heading from "@/components/dashboard/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";

interface NavItem {
  title: string;
  href: string;
  icon?: string | null;
}

const sidebarNavItems: NavItem[] = [
  {
    title: "Profile",
    href: "/dashboard/account-settings/profile",
    icon: null,
  },
  {
    title: "Password",
    href: "/dashboard/account-settings/password",
    icon: null,
  },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
  const currentPath = usePathname();

  return (
    <div className="px-4 py-6">
      <Heading
        title="Settings"
        description="Manage your profile and account settings"
      />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
        <aside className="w-full max-w-xl lg:w-48">
          <nav className="flex flex-col space-y-1 space-x-0">
            {sidebarNavItems.map((item, index) => (
              <Button
                key={`${item.href}-${index}`}
                size="sm"
                variant="ghost"
                asChild
                className={cn("w-full justify-start", {
                  "bg-muted": currentPath === item.href,
                })}
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </nav>
        </aside>

        <Separator className="my-6 md:hidden" />

        <div className="flex-1 md:max-w-2xl">
          <section className="max-w-xl space-y-12">{children}</section>
        </div>
      </div>
    </div>
  );
}
