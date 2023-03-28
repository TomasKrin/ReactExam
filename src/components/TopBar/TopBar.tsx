import { ADD_PATH, HOME_PATH, LOGIN_PATH, REGISTER_PATH } from "../../routes/consts";

import Button from "../Button/Button";
import { GrLogout } from "react-icons/gr";
import { SiSkillshare } from "react-icons/si";
import { UserContext } from "../../contexts/UserContext";
import { lightPurple } from "../../consts/styles";
import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogOut } = useContext(UserContext);

  if (isLoggedIn) {
    return (
      <Container>
        <Logo>
          <SiSkillshare />
        </Logo>
        <ButtonContainer>
          <Button variant="primary" onClick={() => navigate(HOME_PATH)}>
            Home
          </Button>
          <Button variant="secondary" onClick={() => navigate(ADD_PATH)}>
            Add new skill
          </Button>
          <GrLogout onClick={handleLogOut} />
        </ButtonContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <Logo>
          <SiSkillshare />
        </Logo>
        <div>
          <Button variant="primary" onClick={() => navigate(LOGIN_PATH)}>
            LogIn
          </Button>
          <Button variant="secondary" onClick={() => navigate(REGISTER_PATH)}>
            Register
          </Button>
        </div>
      </Container>
    );
  }
};

export default TopBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  margin-bottom: 20px;
  background-color: ${lightPurple};
`;

const Logo = styled.div`
  svg {
    font-size: 3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 16px;
  }
`;
