import React, { Component } from "react";
import Modal from "./modal";
import { Button } from "reactstrap";

export default class integration extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div
              className="col-12 align-items-center d-flex flex-wrap"
              style={{
                background: "#5fa9d6",
                height: "150px",
                justifyContent: "center"
              }}
            >
              <Modal buttonLabel={"Conectar"}></Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
