import React from "react";
import PropTypes from "prop-types";
//styles
import {
  CardItemContainer,
  PokemonImage,
  PokemonName,
  Description
} from "../../styles/cards/cards";

const CardItem = React.forwardRef(({ onClick, href, name, image }, ref) => (
  <CardItemContainer href={href} onClick={onClick} ref={ref}>
    <PokemonImage src={image} />
    <PokemonName>{name}</PokemonName>
    <Description>
      «Покемо́н» — популярная медиафраншиза, созданная Сатоси Тадзири в 1996
      году. Товарный знак «Покемон» принадлежит Nintendo, одной из крупнейших
      фирм-разработчиков видеоигр.
    </Description>
  </CardItemContainer>
));

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CardItem;
