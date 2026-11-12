import { Helmet } from "react-helmet";

export function CoursesPage() {
  return (
    <>
      <Helmet>
        <title>Courses - StudentHub</title>
      </Helmet>
      <div className="min-w-0 flex-1 p-6 lg:p-8 min-h-screen bg-background text-foreground">
        <h1 className="text-2xl font-bold">Courses</h1>
      </div>
    </>
  );
}
