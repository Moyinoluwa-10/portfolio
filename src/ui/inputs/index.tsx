"use client";
import { EmailInput } from "./email-input";
import { TextInput } from "./text-input";
import { TextAreaInput } from "./textarea-input";
import { InputProps, Inputs } from "./types";

export function Input(props: InputProps) {
  const { type, ...restProps } = props;

  switch (type) {
    case Inputs.email:
      return <EmailInput {...restProps} />;

    case Inputs.text:
      return <TextInput {...restProps} />;

    case Inputs.textarea:
      return <TextAreaInput {...restProps} />;

    default:
      return <p>Pick an input from the "Inputs enum"</p>;
  }
}
