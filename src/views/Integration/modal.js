import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FontAwesome from 'react-fontawesome'

const ModalBD = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const [test,Settes] = useState(false)

  const toggle = () => setModal(!modal);

  if(!test){return (
    <div>
      <Button color="light" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Credenciales de Base de Datos</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-6">
              <div class="form-group">
                <input
                  id="phone"
                  name="phone"
                  class="form-control mt-2 mb-2"
                  placeholder="Host"
                  value=""
                />
                 <input
                  id="phone"
                  name="phone"
                  class="form-control mt-2 mb-2"
                  placeholder="Port"
                  value=""
                />
                 <input
                  id="phone"
                  name="phone"
                  class="form-control mt-2 mb-2"
                  placeholder="Schema"
                  value=""
                />
              </div>
            </div>
            <div className="col-6">
            <div class="form-group">
                <input
                  id="phone"
                  name="phone"
                  class="form-control mt-2 mb-2"
                  placeholder="Base de Datos"
                  value=""
                />
                 <input
                  id="phone"
                  name="phone"
                  class="form-control mt-2 mb-2"
                  placeholder="Usuario"
                  value=""
                />
                 <input
                  id="phone"
                  name="phone"
                  class="form-control mt-2 mb-2"
                  placeholder="Contraseña"
                  value=""
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{Settes(true)}}>
            Probar Conexión
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  }else{
    return (
        <div>
          <Button color="light" onClick={toggle}>
            {buttonLabel}
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Credenciales de Base de Datos</ModalHeader>
            <ModalBody>
              <div className="row justify-content-center">
                <div className="col-6" >
                <h3 className="text-black text-center" style={{color:"green"}}>Credenciales Correctas <FontAwesome
                    className="super-crazy-colors"
                    name="check-circle"
                    size="xl"
                  /></h3>
               
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      )
  }
};

export default ModalBD;
