import Card from "./Card";
import { CirclesWithBar } from "react-loader-spinner";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import { useContent } from "../../hooks/content";
import { useContext } from "react";

const Home = () => {
  const { authToken } = useContext(UserContext);
  const { data, isLoading } = useContent(authToken);
  const skills = data || [];

  if (skills.length === 0 && !isLoading) {
    return (
      <div>
        <Title>My Skills</Title>
        <p>There are no skills added yet...</p>
      </div>
    );
  } else {
    return (
      <div>
        <Title>My Skills</Title>
        {isLoading ? (
          <div
            style={{
              width: "100vw",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CirclesWithBar
              height="100"
              width="100"
              color="#3f51b5"
              visible={true}
              ariaLabel="circles-with-bar-loading"
            />
          </div>
        ) : (
          <Container>
            {skills.map((skill) => (
              <Card key={skill.id} title={skill.title} description={skill.description} />
            ))}
          </Container>
        )}
      </div>
    );
  }
};

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;
