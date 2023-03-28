import * as Yup from "yup";

import { Form, Formik } from "formik";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { REGISTER_PATH } from "../../routes/consts";
import { User } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useContext } from "react";
import { useLoginUser } from "../../hooks/user";
import { useNavigate } from "react-router-dom";

const initialValues: User = {
  email: "",
  password: "",
};

const validationSchema: Yup.ObjectSchema<User> = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginUser } = useLoginUser();
  const { handleLogIn } = useContext(UserContext);

  const handleSubmit = (values: User) => {
    loginUser(values)
      .then((response) => {
        handleLogIn(values, response);
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid Credentials!");
      });
  };

  return (
    <PageContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <h1>Login</h1>
            <RowContainer>
              <FormikInput type="email" name="email" placeholder="Email" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="password" name="password" placeholder="Password" />
            </RowContainer>
            <RowContainer>
              <Button variant="primary" disabled={isSubmitting}>
                Login
              </Button>
              <span onClick={() => navigate(REGISTER_PATH)}>Sign Up</span>
            </RowContainer>
          </StyledForm>
        )}
      </Formik>
    </PageContainer>
  );
};

export default Login;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  overflow: hidden;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 16px;
  h1 {
    text-align: center;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 15px;
    align-self: center;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
