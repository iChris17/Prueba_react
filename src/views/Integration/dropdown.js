import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Drop = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
    
    const dashboards=['MySQL', 'MSSQL','Oracle']
  
    return (
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        Base de Datos
        </DropdownToggle>
        <DropdownMenu>
          {dashboards.map((number,i)=>(
            <DropdownItem key={i} onClick={()=>{props.paginate(i)}}>{number}</DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
        

    );
  }
  
  export default Drop;