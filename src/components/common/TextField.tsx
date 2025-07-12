"use client";

import React from "react";
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface CustomTextFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
  required?: boolean;
}

const CustomTextField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
  required = false,
}: CustomTextFieldProps<T>) => {
  return (
    <div>
      <label htmlFor={name} className="block font-medium text-sm mb-1 text-black">
        {label} {required && "*"}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full border border-gray-300 text-black rounded px-3 py-2"
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CustomTextField;
