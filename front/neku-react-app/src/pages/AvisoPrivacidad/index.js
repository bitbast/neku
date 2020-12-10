import React, {Component} from "react"

import { Container, Row, Col} from "reactstrap";

import "./AvisoPrivacidad.css";


class Aviso extends Component {
    render () {
        return (
            <Container fluid className="textContainer d-flex align-items-start">
                <Row className="py-5">
                    <Col xs={12} sm={12} md={3} lg={3} className="heading pt-0">
                        <h1>Aviso de Privacidad</h1>
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={9} className="d-flex justify-content-center align-items-center">
                        <p>
                          Neku S.A. con domicilio en Porfirio Díaz 57 Col Del Valle Centro 03100 Ciudad de México, conforme a lo establecido en la Ley Federal de Protección de Datos en Posesión de Particulares, pone a disposición de nuestros clientes, proveedores, empleados y público en general, nuestro Aviso de Privacidad.
                          <br /><br />
                          Los datos personales que nos proporciona son utilizados estrictamente en la realización de funciones propias de nuestra empresa y <strong>por ningún motivo serán transferidos a terceros.</strong>
                          <br /><br />
                          A nuestros clientes les solicitamos los siguientes datos personales:
                          <br />
                            <ul>
                              <li>
                                Nombre, teléfono, correo electrónico y cuentas en redes sociales para facilitar el proceso de contratación de nuestro servicio y/o compra de nuestros productos.
                              </li>
                              <li>
                                Datos financieros como número de tarjeta de débito o crédito, nombre del titular, nombre de la institución bancaria, fecha de vencimiento y código de seguridad para efectuar los pagos de contratación y/o compra correspondientes.
                              </li>
                            </ul>
                          <br />
                          A nuestros proveedores solicitamos los siguientes datos personales:
                          <br />
                          <ul>
                            <li>
                            Nombre, teléfono, correo electrónico y domicilio para facilitar el proceso de contratación de servicio y/o compra de productos.
                            </li>
                          </ul>
                          <br />
                          A nuestros empleados solicitamos los siguientes datos personales:
                          <br />
                          <ul>
                            <li>
                              Nombre, teléfono, correo electrónico, domicilio, fecha y lugar de nacimiento.
                            </li>
                            <li>
                              Antecedentes laborales, puesto, sueldo y motivo de terminación laboral en los últimos cinco empleos.
                            </li>
                          </ul>
                          <br />
                          En caso de realizar modificaciones al presente Aviso de Privacidad, le informaremos mediante correo electrónico, nuestro sitio web oficial, medios impresos y nuestros operadores telefónicos.
                          <br />
                        </p>      
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Aviso;