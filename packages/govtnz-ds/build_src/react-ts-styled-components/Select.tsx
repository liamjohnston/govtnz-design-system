import React from "react";
import styled from "styled-components";

type Props = {
  selectId?: string;
  name: string;
  required?: boolean;
  multiple?: boolean;
  onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  ref?: React.RefObject<HTMLSelectElement>;
  children?: React.ReactNode;
};

const StyledSelect = styled.select`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  padding: 0.4rem 2.5rem 0.5rem 0.6rem;
  border: 1px solid g-theme-form-border-color;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  border-radius: 0;
  background-position: right 0.7em top 50%;
  background-size: 1rem auto;
  background-image: url("data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%228.5%22%20viewBox%3D%220%200%2016%2010.5%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%201%20L8%208.5%20L15%201%22%20stroke-width%3D%223%22%20stroke%3D%22currentColor%22%20fill%3D%22transparent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E");
  background-color: g-theme-select-background-color;
  color: g-theme-form-color;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :valid,
  :invalid {
    background-color: g-theme-form-background-color;
    -webkit-text-fill-color: g-theme-color !important;
    color: g-theme-color;
    border: 1px solid g-theme-form-border-color;
    box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
    -webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.25;
  }
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
    outline-offset: 0;
  }
  margin-top: 0px;
`;

const Select = ({
  selectId,
  name,
  required,
  multiple,
  onChange,
  ref,
  children
}: Props) => (
  <StyledSelect
    id={selectId}
    name={name}
    required={required}
    multiple={multiple}
    onChange={onChange}
    ref={ref}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>
        <option>Options</option>
      </React.Fragment>
    )}
  </StyledSelect>
);

export default Select;
