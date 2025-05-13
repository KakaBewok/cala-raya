import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import Link from "next/link";
import { useRouter } from "next/navigation";

type NavLinkProps = {
  active?: boolean;
  url: string;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavLink({
  active = false,
  url,
  className = "",
  children,
  ...props
}: NavLinkProps) {
  const router = useRouter();
  const { setLoading } = useInvitationAdmin();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);

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
      {...props}
      className={`group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium text-slate-300 duration-200 ease-in-out hover:bg-neutral-700 ${
        active ? "bg-neutral-700 dark:bg-neutral-700" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
