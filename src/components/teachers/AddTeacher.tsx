"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTeacherStore } from "@/store/teacherStore";
import { toast } from "react-hot-toast";
import { CancelButton, SubmitButton } from "../common/Buttons";
import CustomTextField from "../common/TextField";
import CircularLoader from "../common/CircularProgress";
import { TeacherFormData } from "@/types/teacher";

const teacherSchema = yup.object({
  name: yup.string().required("Name is required"),
  experience: yup
    .number()
    .typeError("Enter a valid number")
    .min(0)
    .max(60)
    .required("Experience is required"),
  subject: yup.string().required("Subject is required"),
  status: yup
    .mixed<"active" | "inactive">()
    .oneOf(["active", "inactive"])
    .required("Status is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TeacherFormData>({
    resolver: yupResolver(teacherSchema),
  });

  const addTeacher = useTeacherStore((state) => state.addTeacher);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<TeacherFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      addTeacher({ ...data, id: Date.now().toString() });
      toast.success("Teacher added successfully!");
      reset();
    } catch (e) {
      toast.error(`Something went wrong: ${e}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-focus the first field with an error
  useEffect(() => {
    const firstError = Object.keys(errors)[0];
    if (firstError) {
      const field = document.querySelector(`[name="${firstError}"]`) as HTMLElement;
      field?.focus();
    }
  }, [errors]);

  if (isSubmitting) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <CircularLoader size={36} />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-md transition-all duration-300">
      <h2 className="text-lg font-semibold text-black mb-4">Add Teacher</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <CustomTextField
            label="Name"
            name="name"
            register={register}
            error={errors.name}
            required
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <CustomTextField
            label="Experience"
            name="experience"
            type="number"
            register={register}
            error={errors.experience}
            required
            aria-describedby={errors.experience ? "experience-error" : undefined}
          />
          {errors.experience && (
            <p id="experience-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.experience.message}
            </p>
          )}
        </div>

        <div>
          <CustomTextField
            label="Subject"
            name="subject"
            register={register}
            error={errors.subject}
            required
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="status" className="block font-medium text-sm mb-1 text-black">
            Status *
          </label>
          <select
            id="status"
            {...register("status")}
            aria-describedby={errors.status ? "status-error" : undefined}
            defaultValue=""
            className="w-full border border-gray-300 text-black rounded px-3 py-2"
          >
            <option value="" disabled>Select status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && (
            <p id="status-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.status.message}
            </p>
          )}
        </div>

        <div>
          <CustomTextField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            required
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <CancelButton onClick={() => reset()} />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
