import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  Menu,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Students",
    path: "/students",
    icon: Users,
  },
  {
    label: "Courses",
    path: "/courses",
    icon: BookOpen,
  },
];

export function MobileSidebar() {
  return (
    <Sheet>
      <div className="flex items-center justify-between p-4 md:hidden">
        <h1 className="text-lg font-semibold">StudentHub</h1>

        <SheetTrigger>
          <Menu className="h-8 w-8" />
        </SheetTrigger>
      </div>

      <SheetContent side="left" className="w-64 p-0">
        <div className="flex h-16 items-center gap-3 border-b px-6">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="text-lg font-semibold">StudentHub</span>
        </div>

        <nav className="space-y-2 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
