import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
//styles
import { CardsContainer, CardItemContainer } from "../../styles/cards/cards";
//components
import CardItem from "./CardItem";

const Cards = ({ data }) => {
  return (
    <CardsContainer>
      {data.map(({ name, id, image }) => (
        <Link
          href="/pokemon-details/[id]"
          as={`/pokemon-details/${id}`}
          key={id}
          passHref
        >
          <CardItemContainer>
            <CardItem name={name} image={image} />
          </CardItemContainer>
        </Link>
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Cards;
