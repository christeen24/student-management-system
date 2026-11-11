
export type StudentStatus = "Active" | "Inactive";

export interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  status: StudentStatus;
  enrollmentDate: string;
}
