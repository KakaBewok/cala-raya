import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import Link from "next/link";
import { useRouter } from "next/navigation";

type NavLinkProps = {
  active?: boolean;
  url: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavLink({
  active = false,
  url,
  label,
  className = "",
  children,
  ...props
}: NavLinkProps) {
  const router = useRouter();
  const { setLoading, setSidebarOpen } = useInvitationAdmin();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);

    // Close sidebar on mobile after click
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }

    try {
      router.push(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link
      href={url}
      onClick={handleClick}
      aria-label={label}
      {...props}
      className={`group relative flex items-center gap-3.5 rounded-lg py-2.5 px-4 text-sm font-medium text-slate-300 duration-200 ease-in-out hover:bg-slate-800 hover:text-white ${
        active
          ? "bg-slate-800 text-white border-l-[3px] border-indigo-500 pl-[13px]"
          : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}

