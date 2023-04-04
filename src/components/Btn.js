import { Button } from "@mui/material";
import React from "react";

export const Btn = (props) => {
  return (
    <Button
      className={props.text === "0" ? "rowSpan" : "bigFont"}
      onClick={() => {
        props.onBtnClick(props.text);
      }}
      size="small"
      style={{
        backgroundColor: props.bgColor,
        borderColor: props.borderColor,
        color:props.color
      }}
      variant={props.variant}
    >
      {props.text}
    </Button>
  );
};
