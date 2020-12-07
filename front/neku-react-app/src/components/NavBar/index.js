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
  DropdownItem
} from 'reactstrap';

// ------------- CSS ------------- //
import './NavBar.css';

// ------------- SMALLER COMPONENTS ------------- //
import nekuLogoNav from "../../svg/neku-logo_grad-white-text-white.svg";
import { BsController } from 'react-icons/bs'
import { IconContext } from "react-icons";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  

  return (
    <div>
      <Navbar expand="sm">
        <a href="/">
        <NavbarBrand className="col-6 col-sm-3 col-md-3 col-lg-3 p-0 m-0 mb-2" href="/">
          <img src={nekuLogoNav} className="nekulogoNav" alt="neku logo" />
        </NavbarBrand>
        </a>
          <NavbarToggler onClick={toggle}>
            <IconContext.Provider value={{ color:"white", size:"2em"}}>
              {team.members.gamer.name}
            </IconContext.Provider>
          </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Videogames">Juegos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Teams">Equipos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Gamers">Gamers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Extras</NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown inNavbar>
              <DropdownToggle>
                <IconContext.Provider value={{ color:"white", size:"2em"}}>
                  <div id="controllerButton">
                    <BsController />
                  </div>
                </IconContext.Provider>
              </DropdownToggle>
              <DropdownMenu right id="dropdownMenuProfile">
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
                <DropdownItem id="signupMenuSelect" className="mb-0">
                  <a href="/RegisterChoose">REGÍSTRATE</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;