import React from "react";
declare type Props = {
    errorId?: string;
    id?: string;
    label?: React.ReactNode;
    hint?: React.ReactNode;
    hintId?: string;
    error?: React.ReactNode;
    width?: "30" | "20" | "10" | "5" | "4" | "3" | "2";
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    value?: string;
    min?: number;
    max?: number;
    type: React.InputHTMLAttributes<HTMLInputElement>["type"];
    spellCheck?: boolean;
    maxLength?: number;
    autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
    ref?: React.RefObject<HTMLInputElement>;
};
declare const InputBlock: ({ errorId, id, label, hint, hintId, error, width, required, disabled, readOnly, autoFocus, name, value, min, max, type, spellCheck, maxLength, autoComplete, onChange, ref }: Props) => JSX.Element;
export default InputBlock;
