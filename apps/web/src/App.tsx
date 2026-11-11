
import { useMemo, useState } from "react";
import {
  Users,
  UserCheck,
  UserX,
  BookOpen,
  Search,
} from "lucide-react";

import { Sidebar } from "@/components/layout/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { StudentTable } from "@/components/dashboard/StudentTable";

import { students } from "@/data/students";

import { Input } from "@/components/ui/input";

function App() {
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchTerm = search.toLowerCase();

      return (
        student.name.toLowerCase().includes(searchTerm) ||
        student.email.toLowerCase().includes(searchTerm) ||
        student.course.toLowerCase().includes(searchTerm)
      );
    });
  }, [search]);

  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  const totalCourses = new Set(
    students.map((student) => student.course)
  ).size;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="min-w-0 flex-1 p-6 lg:p-8">
        {/* Header */}
        <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Welcome back! Here's your student overview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

              <Input
                placeholder="Search students..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="pl-9"
              />
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
              A
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Students"
            value={String(totalStudents)}
            description="Registered students"
            icon={Users}
          />

          <StatCard
            title="Active Students"
            value={String(activeStudents)}
            description="Currently active"
            icon={UserCheck}
          />

          <StatCard
            title="Inactive Students"
            value={String(inactiveStudents)}
            description="Currently inactive"
            icon={UserX}
          />

          <StatCard
            title="Courses"
            value={String(totalCourses)}
            description="Available courses represented"
            icon={BookOpen}
          />
        </section>

        {/* Student Table */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">
              Recent Students
            </h2>
            <p className="text-sm text-muted-foreground">
              Manage and view your registered students.
            </p>
          </div>

          <StudentTable students={filteredStudents} />
        </section>
      </main>
    </div>
  );
}

export default App;
