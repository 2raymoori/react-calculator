import React from "react";
import { Btn } from "./Btn";
import "./styles.css";
export const CalculatorButtons = ({ btnClicked }) => {
  return (
    <div className="container">
      <div className="row calcRow0">
        <Btn
          bgColor="orange"
          onBtnClick={btnClicked}
          variant="contained"
          color="secondary"
          text="C"
        />
        <Btn
          bgColor="orange"
          color="secondary"
          variant="contained"
          text="("
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="orange"
          variant="contained"
          text=")"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="orange"
          color="secondary"
          variant="contained"
          text="/"
          onBtnClick={btnClicked}
        />
      </div>
      <div className="row calcRow1">
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="7"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="8"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="9"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="orange"
          color="secondary"
          variant="contained"
          text="*"
          onBtnClick={btnClicked}
        />
      </div>
      <div className="row calcRow2">
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="4"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="5"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="6"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="orange"
          color="secondary"
          variant="contained"
          text="-"
          onBtnClick={btnClicked}
        />
      </div>

      <div className="row calcRow3">
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="1"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="2"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
          text="3"
          onBtnClick={btnClicked}
        />
        <Btn
          bgColor="orange"
          color="secondary"
          variant="contained"
          text="+"
          onBtnClick={btnClicked}
        />
      </div>
      <div className="row calcRow4">
        <div>
          <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
            text="0"
            className="zero"
            onBtnClick={btnClicked}
          />
        </div>
        <div>
          <Btn
          bgColor="white"
          variant="outlined"
          color="orange"
          borderColor="orange"
            text="."
            onBtnClick={btnClicked}
          />
        </div>
        <div>
          <Btn
            bgColor="orange"
            onBtnClick={btnClicked}
            color="secondary"
            variant="contained"
            text="="
          />
        </div>
      </div>
    </div>
  );
};