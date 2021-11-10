import React from "react";
import Card, { ICard } from "./Card/Card";
import { CardsContainer } from "./CardListStyle";

export const CardList = (props: { cards: ICard[] }) => {
  const renderCards = () => props.cards.map((card,key) => <Card key={key} {...card}></Card>);

  return <CardsContainer>{renderCards()}</CardsContainer>;
};
