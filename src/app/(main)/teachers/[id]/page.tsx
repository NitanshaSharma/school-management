import { notFound } from "next/navigation";
import { teachersDataJSON } from "@/data/TeachersData";
import TeacherDetails from "@/components/teachers/TeacherDetails";

export default async function CategoryDetail({params}: {params: Promise<{ id: string }>}) {
const { id } = await params;
  const teacher = teachersDataJSON.find((t) => t.id === id);

  if (!teacher) return notFound();

  return <TeacherDetails teacherData={teacher} />;
}
