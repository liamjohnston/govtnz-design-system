import React from "react";

type Props = {
  styleSize: "xlarge" | "large" | "medium" | "small" | "xsmall" | "xxsmall";
  marginBottom8?: boolean;
  marginBottom0?: boolean;
  marginTop0?: boolean;
  marginTop8?: boolean;
  id?: string;
  children?: React.ReactNode;
};

const constants = {
  styleSize: {
    xlarge: "g-heading-xl",
    large: "g-heading-l",
    medium: "g-heading-m",
    small: "g-heading-s",
    xsmall: "g-heading-xs",
    xxsmall: "g-heading-xxs"
  }
};

const H2 = ({
  styleSize,
  marginBottom8,
  marginBottom0,
  marginTop0,
  marginTop8,
  id,
  children
}: Props) => (
  <h2
    className={`g-heading${
      constants.styleSize[styleSize] !== undefined
        ? " " + constants.styleSize[styleSize]
        : ""
    }${marginBottom8 ? " g-heading-mb-8" : ""}${
      marginBottom0 ? " g-heading-mb-0" : ""
    }${marginTop0 ? " g-heading-mt-0" : ""}${
      marginTop8 ? " g-heading-mt-8" : ""
    }`}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </h2>
);

export default H2;
