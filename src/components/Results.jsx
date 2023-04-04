import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import History from "./History";
import { Card, CardContent, Typography } from "@mui/material";

export const Results = ({ exp, content, onUpdateExpression }) => {
  const modifiedContent = content.startsWith("+")
    ? content.substr(1, content.length)
    : content;
  return (
    // <div>
    <Card
      style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      }}
      height="200"
      data-testid="results"
    >
      <CardContent
        style={{
          overflow: "auto",
          borderRadius: 20,
          borderColor: "red",
        }}
      >
        <Typography variant="h5" style={{ color: "orange" }}>
          Result :
        </Typography>
        <p
          style={{
            fontWeight: "bold",
            paddingLeft: "20px",
            textAlign: "center",
            color: "orange",
            textDecoration: "underline",
          }}
        >
          {modifiedContent}
        </p>
        {/** @TODO: Add your implementation here */}
        <hr />
        <History
          flag={true}
          onPressItem={onUpdateExpression}
          answer={{ expression: exp, ans: modifiedContent }}
        />
      </CardContent>
    </Card>
    // {/* </div> */}
  );
};
