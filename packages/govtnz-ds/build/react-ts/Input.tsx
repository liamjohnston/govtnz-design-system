import * as React from "react";

type Props = {
  width?: "30" | "20" | "10" | "5" | "4" | "3" | "2" | undefined;
  error?: boolean | undefined;
  id?: string | undefined;
  describedBy?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  spellCheck?: boolean | undefined;
  maxLength?: number | undefined;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange: any;
};

const constants = {
  width: {
    "2": "g-input--width-2",
    "3": "g-input--width-3",
    "4": "g-input--width-4",
    "5": "g-input--width-5",
    "10": "g-input--width-10",
    "20": "g-input--width-20",
    "30": "g-input--width-30"
  }
};

const Input = ({
  width,
  error,
  id,
  describedBy,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  spellCheck,
  maxLength,
  autoComplete,
  onChange
}: Props) => (
  <input
    aria-describedby={describedBy}
    className={`g-input${
      constants.width[width] !== undefined ? " " + constants.width[width] : ""
    }${error ? " g-input--error" : ""}`}
    id={id}
    name={name}
    type="text"
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    spellCheck={spellCheck}
    maxLength={maxLength}
    autoComplete={autoComplete}
    onChange={onChange}
  />
);

export default Input;
