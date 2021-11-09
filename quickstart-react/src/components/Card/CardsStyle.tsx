import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  margin: 10px 15px;
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AnswersAndVotesContainer = styled.div`
  color: #676878;
  font-weight: 700;
  text-align: center;
  padding: 10px 3px 10px 8px;
  border-right: 1px solid #e5e5e5;
`;
export const Votes = styled.div`
  border-radius: 4px;
  padding: 8px;
`;

export const VotesLabel = styled.div`
  font-weight: 400;
`;

export const Answers = styled.div<{ is_answered: boolean; answer_count: number }>`
  border-radius: 4px;
  border: solid 1px ${(props) => (props.answer_count > 0 ? "#448555" : "#ffffff")};
  background-color: ${(props) => (props.is_answered ? "#448555" : "#ffffff")};
  color: ${(props) => (props.is_answered ? "#ffffff" : props.answer_count > 0 ? "#448555" : "#676878")};
  padding: 8px;
`;
export const AnswersLabel = styled.div`
  font-weight: 400;
`;

export const TextContainer = styled.div`
  font-size: 16px;
  line-height: 19px;
  align-self: center;
  padding: 0px 8px;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 8px 0;
`;
export const Description = styled.div`
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LinkContainer = styled.div`
  text-align: center;
  align-self: center;
  font-size: 14px;
  line-height: 16px;
  white-space: nowrap;
  padding: 8px;
  cursor: pointer;
`;
export const Icon = styled.img`
  transition: 0.2s ease-in;
  &:hover {
    transform: translateX(20%);
  }
`;

export const TagListContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 8px 10px;
`;
export const TagList = styled.div`
  display: flex;
`;
export const Tag = styled.div`
  background-color: #e7e9ee;
  border-radius: 4px;
  margin: 4px;
  color: #676878;
  padding: 4px 12px;
`;

export const Divider = styled.div`
  border-left: 1px solid #e5e5e5;
  height: auto;
`;
