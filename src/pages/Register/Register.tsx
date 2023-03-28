import * as Yup from "yup";

import { Form, Formik } from "formik";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { LOGIN_PATH } from "../../routes/consts";
import { User } from "../../types/user";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useCreateUser } from "../../hooks/user";
import { useNavigate } from "react-router-dom";

const initialValues: User = {
  email: "",
  password: "",
};

const validationSchema: Yup.ObjectSchema<User> = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
});

const Register = () => {
  const navigate = useNavigate();
  const { mutateAsync: createUser } = useCreateUser();

  const handleSubmit = (values: User) => {
    createUser(values)
      .then(() => {
        toast.success("Successfully registered!");
        setTimeout(() => {
          navigate(LOGIN_PATH);
        }, 500);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Registration Failed!");
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
            <h1>Register</h1>
            <RowContainer>
              <FormikInput type="email" name="email" placeholder="Email" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="password" name="password" placeholder="Password" />
            </RowContainer>
            <RowContainer>
              <Button variant="primary" disabled={isSubmitting}>
                Register
              </Button>
              <span onClick={() => navigate(LOGIN_PATH)}>Login</span>
            </RowContainer>
          </StyledForm>
        )}
      </Formik>
    </PageContainer>
  );
};

export default Register;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  overflow: hidden;

  h1 {
    text-align: center;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 16px;
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
