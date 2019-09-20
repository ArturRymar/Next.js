import React from "react";
import PropTypes from "prop-types";
//styles
import {
  PokemonContainer,
  PokemonImage,
  PokemonName,
  Description
} from "../../styles/cards/cards";

const CardItem = ({ name, image }) => (
  <PokemonContainer>
    <PokemonImage src={image} />
    <PokemonName>{name}</PokemonName>
    <Description>
      «Покемо́н» — популярная медиафраншиза, созданная Сатоси Тадзири в 1996
      году. Товарный знак «Покемон» принадлежит Nintendo, одной из крупнейших
      фирм-разработчиков видеоигр.
    </Description>
  </PokemonContainer>
);

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CardItem;
