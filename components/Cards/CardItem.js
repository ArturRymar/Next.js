import React from "react";
import PropTypes from "prop-types";
//styles
import {
  CardItemContainer,
  PokemonImage,
  PokemonName,
  Description,
  ShowMore,
  Reference,
  ShadowContainer
} from "../../styles/cards/cards";

const CardItem = ({ name, image }) => (
  <CardItemContainer>
    <ShadowContainer>
      <PokemonImage src={image} />
      <PokemonName>{name}</PokemonName>
      <Description>
        «Покемо́н» — популярная медиафраншиза, созданная Сатоси Тадзири в 1996
        году. Товарный знак «Покемон» принадлежит Nintendo, одной из крупнейших
        фирм-разработчиков видеоигр.
      </Description>
    </ShadowContainer>
    <ShowMore>
      <Reference href="#">SHARE</Reference>
      <Reference href="#">LEARN MORE</Reference>
    </ShowMore>
  </CardItemContainer>
);

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CardItem;
