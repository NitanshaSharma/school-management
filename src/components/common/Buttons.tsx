import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const CancelButton: React.FC<ButtonProps> = ({
  label = "Cancel",
  className = "",
  ...props
}) => (
  <button
    type="button"
    className={`bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 rounded ${className}`}
    {...props}
  >
    {label}
  </button>
);

export const SubmitButton: React.FC<ButtonProps> = ({
  label = "Submit",
  className = "",
  ...props
}) => (
  <button
    type="submit"
    className={`bg-[#F15A29] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded ${className}`}
    {...props}
  >
    {label}
  </button>
);

type FormActionsProps = {
  onCancel?: () => void;
  submitLabel?: string;
  cancelLabel?: string;
};

export const FormActions: React.FC<FormActionsProps> = ({
  onCancel,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
}) => {
  return (
    <div className="flex justify-end space-x-3 pt-4">
      {onCancel && (
        <CancelButton onClick={onCancel} label={cancelLabel} />
      )}
      <SubmitButton label={submitLabel} />
    </div>
  );
};
