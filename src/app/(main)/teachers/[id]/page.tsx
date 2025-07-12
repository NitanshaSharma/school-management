import { notFound } from "next/navigation";
import { teachersDataJSON } from "@/data/TeachersData";
import TeacherDetails from "@/components/teachers/TeacherDetails";
import { TeacherDetailProps } from "@/types/teacher";



export default function TeacherDetailPage({ params }: TeacherDetailProps) {
  const teacher = teachersDataJSON.find((t) => t.id === params.id);

  if (!teacher) return notFound();

  return <TeacherDetails teacherData={teacher} />;
}
