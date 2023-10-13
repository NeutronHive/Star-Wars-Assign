import React from 'react';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/kameikay/">Tushar Rathod </a>
        .
        {' '}
        <br />
        Thanks To star wars API
        {' '}
        <a href="https://swapi.dev/">SWAPI</a>
        .
      </p>
    </Container>
  );
}
