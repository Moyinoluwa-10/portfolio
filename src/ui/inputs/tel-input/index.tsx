import PhoneInput, { Props } from "react-phone-number-input";

type TelInputProps = { name: string; label: string } & Props<any>;

export const TelInput = ({
  errors,
  touched,
  name,
  label,
  ...props
}: TelInputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-semibold text-black dark:text-primary-100 mb-2"
      >
        {label}
      </label>
      <PhoneInput
        defaultCountry="US"
        withCountryCallingCode={true}
        international={true}
        className="block w-full rounded-lg px-4 py-[10px] bg-accent-1 dark:bg-alt-4 text-black dark:text-primary-100"
        {...props}
      />
      {touched.phoneNumber && errors.phoneNumber ? (
        <div className="text-[#EB5757] text-sm">{errors.phoneNumber}</div>
      ) : null}
    </div>
  );
};
