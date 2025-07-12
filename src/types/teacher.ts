// src/types/teacher.ts

export type Qualification = {
  name: string;
  rate: number;
};

export type ScheduleSlot = {
  day: string;
  start: string;
  end: string;
};

export type Teacher = {
  id: string;
  name: string;
  experience: number; // assuming number
  subject: string;
  status: "active" | "inactive";
  email: string;
  phone: string;
  address: string;
  dob?: string;
  privateQualifications?: Qualification[];
  groupQualifications?: Qualification[];
  schedule?: ScheduleSlot[];
};

export type TeacherFormData = {
  name: string;
  experience: number;
  subject: string;
  status: "active" | "inactive";
  email: string;
};

export interface TeacherDetailsProps {
  teacherData: Teacher;
}

export interface TeacherDetailProps {
  params: { id: string };
}

export type TeacherId = TeacherFormData & {
  id: string; 
};

export type TeacherState = {
  teachers: TeacherId[];
  addTeacher: (teacher: TeacherId) => void
};

