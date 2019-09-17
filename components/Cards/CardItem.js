import React from "react";
import PropTypes from "prop-types";
//styles
import {
  CardItemContainer,
  PokemonImage,
  PokemonName,
  Description,
  ShadowContainer
} from "../../styles/cards/cards";

const CardItem = React.forwardRef(({ onClick, href, name, image }, ref) => (
  <CardItemContainer>
    <a href={href} onClick={onClick} ref={ref}>
      <ShadowContainer>
        <PokemonImage src={image} />
        <PokemonName>{name}</PokemonName>
        <Description>
          «Покемо́н» — популярная медиафраншиза, созданная Сатоси Тадзири в 1996
          году. Товарный знак «Покемон» принадлежит Nintendo, одной из
          крупнейших фирм-разработчиков видеоигр.
        </Description>
      </ShadowContainer>
    </a>
  </CardItemContainer>
));

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CardItem;
