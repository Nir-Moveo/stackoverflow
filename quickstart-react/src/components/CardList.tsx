import React from "react";
import Card, { ICard } from "./Card/Card";
import { CardsContainer } from "./CardListStyle";

export const CardList = (props: { cards: ICard[] }) => {
  const renderCards = () => props.cards.map((card) => <Card {...card}></Card>);

  return <CardsContainer>{renderCards()}</CardsContainer>;
};
