import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
//styles
import { CardsContainer } from "../../styles/cards/cards";
//components
import CardItem from "./CardItem";

const Cards = ({ data }) => {
  return (
    <CardsContainer>
      {data.map(({ name, id, image }) => (
        <Link href={{ pathname: "/pokemon-details", query: { id: id } }}>
          <CardItem name={name} key={id} image={image} />
        </Link>
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Cards;
