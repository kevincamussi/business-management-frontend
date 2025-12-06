import React from "react";

type FormInputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
};

const FormInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  minLength,
}: FormInputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      className="border p-2 rounded text-center"
    />
  );
};

export default FormInput;
