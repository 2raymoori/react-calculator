// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { CalculatorButtons } from "./CalculatorButtons";
import { Card, CardContent, TextField } from "@mui/material";

export const ExpressionInput = ({ handleSubmit }) => {
  const [expression, setExpression] = useState("");
  const [equalPressed, setEqualPressed] = useState(false);
  let captureText = (input) => {
    if (input === "C") {
      setEqualPressed(false);
      setExpression("");
    } else if (input === "=") {
      setEqualPressed(true);
      handleSubmit(expression);
    } else {
      if (equalPressed) {
        setExpression(input);
        setEqualPressed(false);
      } else {
        setExpression(expression + input);
      }
    }
  };
  return (
    <Card
      style={{
        borderRadius: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <CardContent>
        <TextField
          disabled={true}
          inputProps={{
            min: 0,
            style: { textAlign: "right", borderColor: "orange" },
          }}
          value={expression}
          fullWidth={true}
          onKeyPress={(e) => {
            captureText(e.key);
          }}
          label="Expression"
          variant="outlined"
        />
      </CardContent>

      <CalculatorButtons btnClicked={captureText} />
    </Card>
  );
};
