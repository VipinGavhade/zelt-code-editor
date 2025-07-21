import Link from "next/link";
import * as Icons from "lucide-react";
import { Menu, type LucideIcon } from "lucide-react";
import { ThemeToggle as ModeToggle } from "@/components/theme-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type IconName = keyof typeof Icons;

interface NavbarItemType {
  id: number;
  label: string;
  href: string;
  icon: IconName;
}

const NavbarItem: NavbarItemType[] = [
  {
    id: 1,
    label: "Features",
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/#Features`,
    icon: "Sparkles",
  },
  {
    id: 2,
    label: "Questions",
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/#fqa`,
    icon: "CircleHelp",
  },
];

interface DynamicLucideIconProps {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
}

export const DynamicLucideIcon = ({
  name,
  size = 24,
  color,
}: DynamicLucideIconProps) => {
  const Icon = Icons[name] as LucideIcon;

  return <Icon size={size} color={color} />;
};

const Navbar = () => {
  return (
    <nav className="z-50 sticky left-0 top-0 border-b-4 w-screen flex items-center justify-between px-4 py-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        className="text-xl font-bold"
      >
        Zelt
      </Link>
      <ul className="hidden lg:flex items-center space-x-4">
        {NavbarItem.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center gap-2"
          >
            <DynamicLucideIcon name={`${item.icon}`} size={20} />
            {item.label}
          </Link>
        ))}
      </ul>

      <Sheet>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/editor`}>
            <Button variant="default" className="font-semibold">
              <DynamicLucideIcon name="Code2" size={20} />
              <span>Open Editor</span>
            </Button>
          </Link>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
        </div>

        <SheetContent>
          <ul className="p-4 mt-5 flex flex-col gap-6">
            {NavbarItem.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-2"
              >
                <DynamicLucideIcon name={`${item.icon}`} size={20} />
                {item.label}
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
