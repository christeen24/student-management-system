
import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">
        Student Management System
      </h1>

      <p className="text-muted-foreground">
        Our dashboard is coming together!
      </p>

      <Button>
        Add Student
      </Button>
    </main>
  );
}

export default App;
