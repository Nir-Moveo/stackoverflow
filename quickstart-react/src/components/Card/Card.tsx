import React from "react";
import {
  Answers,
  AnswersAndVotesContainer,
  AnswersLabel,
  CardContainer,
  ContentContainer,
  Description,
  Divider,
  Icon,
  LinkContainer,
  Tag,
  TagList,
  TagListContainer,
  TextContainer,
  Title,
  Votes,
  VotesLabel,
} from "./CardsStyle";
import arrow from "../../assets/arrow.png";

export interface ICard {
  tags: string[];
  owner: {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate: number;
    profile_image: string;
    display_name: string;
    link: string;
  };
  is_answered: boolean;
  view_count: number;
  protected_date: number;
  accepted_answer_id: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
  body: string;
}

// const descMock =
//   "Just like a password or a persistent login token. … As a rule of thumb, however, I would say: the stronger your password policy is, the less you have to bug users with delays… ";
const READ_MORE = "Read more";
const Card = (props: ICard): JSX.Element => {
  const { tags, link, title, is_answered, score, answer_count, body } = props;

  const renderTags = () => tags.map((tag: string, key: number) => <Tag key={key}>{tag}</Tag>);
  const openInNewTab = () => window.open(link, "_blank");
  var stringToHTML = function (str: string) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body.innerText;
  };
  return (
    <CardContainer>
      <ContentContainer>
        <AnswersAndVotesContainer>
          <Votes>
            {score}
            <VotesLabel>votes</VotesLabel>
          </Votes>

          <Answers is_answered={is_answered} answer_count={answer_count}>
            {answer_count}
            <AnswersLabel>answers</AnswersLabel>
          </Answers>
        </AnswersAndVotesContainer>

        <TextContainer>
          <Title>{title}</Title>
          <Description>{stringToHTML(body)}</Description>
        </TextContainer>

        <Divider />
        <LinkContainer onClick={openInNewTab}>
          <Icon src={arrow}></Icon>
          <div>{READ_MORE}</div>
        </LinkContainer>
      </ContentContainer>

      <TagListContainer>
        <TagList>{renderTags()}</TagList>
      </TagListContainer>
    </CardContainer>
  );
};

export default Card;
