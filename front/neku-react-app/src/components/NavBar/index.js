import React, { useState } from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

// ------------- CSS ------------- //
import './NavBar.css';

// ------------- SMALL COMPONENTS ------------- //
import nekuLogoNav from "../../svg/neku-logo_grad-white-text-white.svg";
import { BsController } from 'react-icons/bs'
import { IconContext } from "react-icons";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="sm">
        <NavbarBrand className="col-6 col-sm-3 col-md-3 col-lg-3 p-0 m-0" href="/">
          <img src={nekuLogoNav} className="nekulogoNav" alt="neku logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Juegos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#equipos">Equipos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#gamers">Gamers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#gamers">Extras</NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown inNavbar>
              <DropdownToggle id="controllerButton">
                <IconContext.Provider value={{ color:"white", size:"2em"}}>
                  <BsController />
                </IconContext.Provider>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Perfil
                </DropdownItem>
                <DropdownItem>
                  Favoritos
                </DropdownItem>
                <DropdownItem>
                  Eventos
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Ajustes
                </DropdownItem>
                <DropdownItem className="bg-dark text-white">
                  Registro
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;