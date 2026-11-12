import { Routes, Route } from "react-router-dom";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { DashboardPage } from "@/pages/DashboardPage";
import { StudentsPage } from "@/pages/StudentsPage";
import { CoursesPage } from "@/pages/CoursesPage";

function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <MobileSidebar />

        <main className="min-w-0 flex-1">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
