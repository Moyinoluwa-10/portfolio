import { useField } from "formik";
import { TextAreaInputProps } from "../types";

export const TextAreaInput = ({ label, ...props }: TextAreaInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {label && (
        <label
          htmlFor={props.name}
          className="block font-semibold text-black dark:text-primary-100 mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        className="block w-full rounded-lg px-4 py-[10px] bg-accent-1 dark:bg-alt-4 text-black dark:text-primary-100 outline-none resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-[#EB5757] text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};
