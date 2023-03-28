import { black, secondaryColorHover } from "../../consts/styles";

import styled from "styled-components";

type Props = {
  title: string;
  description: string;
};

const Card = ({ title, description }: Props) => {
  return (
    <Container>
      <Text>
        <span>Skill:</span> {title}
      </Text>
      <Text>
        <span>Description:</span> {description}
      </Text>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Text = styled.p`
  color: ${secondaryColorHover};

  span {
    color: ${black};
    font-weight: 500;
  }
`;
