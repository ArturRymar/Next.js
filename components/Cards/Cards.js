import React from "react";
import PropTypes from "prop-types";
//styles
import { CardsContainer } from "../../styles/cards/cards";
//components
import CardItem from "./CardItem";

const Cards = ({ data }) => {
  return (
    <CardsContainer>
      {data.map(({ name, id, image }) => (
        <CardItem name={name} key={id} image={image} />
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Cards;
