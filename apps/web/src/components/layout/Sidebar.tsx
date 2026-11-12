import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  GraduationCap,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-48 xl:w-64 min-h-screen flex-col border-r bg-card">
      <div className="flex h-16 items-center gap-3 border-b px-6">
        <GraduationCap className="h-7 w-7 text-primary" />

        <span className="text-lg font-semibold">StudentHub</span>
      </div>

      <nav className="flex-1 space-y-2 p-5">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
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

      <div className="border-t p-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
            C
          </div>
          Christeen
        </a>
      </div>
    </aside>
  );
}
