import { useInvitation } from "@/hooks/use-invitation";
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
  const { setLoading } = useInvitation();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await router.push(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link
      href={url}
      onClick={handleClick}
      {...props}
      className={`group relative flex items-center gap-3 rounded-sm py-2 px-4 font-medium text-slate-300 duration-200 ease-in-out hover:bg-slate-700 ${
        active ? "bg-slate-700 dark:bg-slate-700" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
