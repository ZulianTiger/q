import React from "react";
import withLogger from "../hoc/Logger";

interface TextInputProps {
  value: string;
  placeholder?: string;
  type?: string;
  label: string;
  onValueChange: (newValue: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  type = "text",
  label,
  onValueChange,
}) => {
  return (
    <div className="text-input-container">
      <label htmlFor={`${label}-text-input`}>{label}</label>
      <input
        id={`${label}-text-input`}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};

export default withLogger({ componentName: "TextInput" })(TextInput);
