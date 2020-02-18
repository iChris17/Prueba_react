import React, { useState, useEffect } from "react";
import { Card, Button } from "reactstrap";
import MedidorCiclometrico from "./medidor.svg";
import CiclometricoInfo from "./ciclometrico_info.svg";
import MedidorNumerico from "./medidor_numerico.svg";
import NumericoInfo from "./numerico_info.svg";

const LeerContador = () => {
  const [show_ciclometrico, setShow_ciclometrico] = useState(false);
  const [show_numerico, setShow_numerico] = useState(false);
  const [color_btn_cic, setBtnCiclo]= useState('secondary')
  const [color_btn_num, setBtnNum]= useState('secondary')

  const handleClick_Ciclometrico = () => {
    setShow_ciclometrico(true);
    setShow_numerico(false);
    setBtnCiclo('success')
    setBtnNum('secondary')
  };

  const handleClick_Numerico = () => {
    setShow_ciclometrico(false);
    setShow_numerico(true);
    setBtnCiclo('secondary')
    setBtnNum('success')
  };

  return (
    <div className="row">
      <div className="col">
        <Card>
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex flex-wrap justify-content-center mt-2 mb-2 border-right">
                <img className="mb-2" src={MedidorCiclometrico} width="100%" height="150" />
                <div >
                <Button
                  color={color_btn_cic}
                  size="md"
                  onClick={() => {
                    handleClick_Ciclometrico();
                  }}
                >
                  <h5 className="text-white">CONTADOR CICLOMETRICO</h5>
                </Button>
                </div>
                {show_ciclometrico ? (
                  <img
                    className="mt-2"
                    src={CiclometricoInfo}
                    width="100%"
                    height="300"
                  />
                ) : <div style={{height:300}}></div>}
              </div>
              <div className="col-6 d-flex flex-wrap justify-content-center mt-2 mb-2">
                <img className="mb-2" src={MedidorNumerico} width="100%" height="150" />
                <div>
                <Button
                  color={color_btn_num}
                  size="md"
                  onClick={() => {
                    handleClick_Numerico();
                  }}
                >
                  <h5 className="text-white">CONTADOR DE AGUJAS</h5>
                </Button>
                </div>
                {show_numerico ? (
                  <img
                    className="mt-4"
                    src={NumericoInfo}
                    width="100%"
                    height="300"
                  />
                ) : <div style={{height:300}}></div>}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LeerContador;
