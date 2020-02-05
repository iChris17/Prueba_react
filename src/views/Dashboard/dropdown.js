import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Drop = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
    
    const dashboards=['Dashboard 1', 'Dashboard 2','Dashboard 3']
  
    return (
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        Seleccione el tipo de dashboard
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