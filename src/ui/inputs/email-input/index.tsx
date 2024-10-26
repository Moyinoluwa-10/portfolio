import { useField } from "formik";
import { TextInputProps } from "../types";

export const EmailInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-sm md:text-base">
      {label && (
        <label
          htmlFor={props.name}
          className="block font-semibold text-black dark:text-primary-100 mb-2"
        >
          {label}
        </label>
      )}
      <input
        className="block w-full rounded-lg px-4 py-[10px] bg-accent-1 dark:bg-alt-4 text-black dark:text-primary-100 outline-none transition-all duration-300 focus:ring-2 focus:ring-black/20 dark:focus:ring-primary-50"
        type="email"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-[#EB5757] text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};
