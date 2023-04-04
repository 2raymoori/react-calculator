// import { Button, List, Paper } from "@material-ui/core";
import React, { Component } from "react";
import "./styles.css";
import { Button, List, Paper } from "@mui/material";
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // To Store the Current State of this Component
      history: [], // To Store the previous Computations.
    };
  }
  // Function to clear History
  clearHistory = () => {
    this.setState({ history: [] }); // Clear History by Assigning  a new Empty Array
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      // Check if the previous Component State is the same as the new State to avoid the inifinite loop.
      this.setState({ history: [this.props.answer, ...this.state.history] }); // Update the History State when ever a new Computation is made
    }
  }
  render() {
    if (this.state.history.length !== 0) {
      return (
        <div
          style={{
            // padding: "0px 10px",
            maxHeight: 150,
            overflow: "auto",
          }}
          className="historyContainers"
        >
          <Button
            onClick={this.clearHistory}
            variant="outlined"
            style={{
              color: "orange",
              borderColor: "orange",
              fontWeight:"bold"
            }}
          >
            Clear History
          </Button>

          <Paper>
            {this.state.history.map((data, id) => {
              return (
                <List
                  style={{
                    borderBottomWidth: 1,
                    borderStyle: "solid",
                    borderColor: "orange",
                    cursor: "pointer",
                    paddingRight: "20px",
                    fontWeight: "bold",
                    color: "orange",
                    fontSize: "20px",
                    marginTop: 2,
                    marginBottom: 2,
                    textAlign: "right",
                    fontStyle: "italic",
                  }}
                  key={id}
                >
                  {" "}
                  {data.ans}
                </List>
              );
            })}
          </Paper>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default History;
