import React from "react";
//styles
import { Row, Cell, Table, Title } from "../../styles/cards/pokemon-details";

const PokemonAttacksTable = ({ data }) => (
  <Table>
    <tbody>
      <Title>
        <Cell>Name</Cell>
        <Cell>Type</Cell>
        <Cell>Damage</Cell>
      </Title>
      {data.map(({ name, type, damage }, index) => (
        <Row key={index}>
          <Cell>{name}</Cell>
          <Cell>{type}</Cell>
          <Cell>{damage}</Cell>
        </Row>
      ))}
    </tbody>
  </Table>
);

export default PokemonAttacksTable;
