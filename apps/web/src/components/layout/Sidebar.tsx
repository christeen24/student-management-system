
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  GraduationCap,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Students", icon: Users, active: false },
  { label: "Courses", icon: BookOpen, active: false },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 min-h-screen flex-col border-r bg-card">
      <div className="flex h-16 items-center gap-3 border-b px-6">
        <GraduationCap className="h-7 w-7 text-primary" />

        <span className="text-lg font-semibold">
          StudentHub
        </span>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Menu
        </p>

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
        >
          <Settings className="h-5 w-5" />
          Settings
        </a>
      </div>
    </aside>
  );
}
