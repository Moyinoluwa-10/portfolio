import { useField } from "formik";
import { TextInputProps } from "../types";

export const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      {label && (
        <label
          htmlFor={props.name}
          className="block font-medium text-black dark:text-primary-100 mb-2"
        >
          {label}
        </label>
      )}
      <input
        className="block w-full rounded-lg px-4 py-[10px] bg-accent-1 dark:bg-alt-4 text-black dark:text-primary-100"
        type="text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-[#EB5757] text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};
