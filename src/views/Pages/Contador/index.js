import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardBody,
  Button,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Medidor from "./medidor.svg";
import MedidorNumerico from "./medidor_numerico.svg";

const LeerContador = () => {
  return (
    <div className="row">
      <div className="col">
        <Card>
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex flex-wrap justify-content-center mt-2 border-right">
                <img src={Medidor} width="100%" height="150" />
                <Button color="secondary" size="md">
                  Contador Ciclométrico
                </Button>
              </div>
              <div className="col-6 d-flex flex-wrap justify-content-center mt-2">
                <img src={MedidorNumerico} width="100%" height="150" />
                <Button color="secondary" size="md">Contador de Agujas</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LeerContador;
