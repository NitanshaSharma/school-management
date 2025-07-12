
import { create } from "zustand";
import { TeacherState } from "@/types/teacher";


export const useTeacherStore = create<TeacherState>((set) => ({
  teachers: [],
  addTeacher: (teacher) =>
    set((state) => ({
      teachers: [...state.teachers, teacher],
    })),
}));
