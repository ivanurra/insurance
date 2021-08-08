import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
`;

const Cotizacion = styled.p`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  color: #00838f;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige merca, año y tipo de seguro.</Mensaje>
  ) : (
    <Cotizacion>El total es $ {cotizacion}</Cotizacion>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
}

export default Resultado;
