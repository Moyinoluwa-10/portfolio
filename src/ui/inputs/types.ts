import { FieldHookConfig } from "formik";

export type InputBaseProps = {
  label?: string;
  children?: React.ReactNode;
};

export type TextInputProps = InputBaseProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>;

export type SelectInputProps = InputBaseProps &
  React.SelectHTMLAttributes<HTMLSelectElement> &
  React.ClassAttributes<HTMLSelectElement> &
  FieldHookConfig<string>;

export type TextAreaInputProps = InputBaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.ClassAttributes<HTMLTextAreaElement> &
  FieldHookConfig<string>;

export type InputProps = {
  type: Inputs;
} & (TextInputProps & SelectInputProps & TextAreaInputProps);

export enum Inputs {
  email = "email",
  textarea = "textarea",
  text = "text",
  time = "time",
}
