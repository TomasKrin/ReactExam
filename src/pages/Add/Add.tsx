import * as Yup from "yup";

import { Form, Formik } from "formik";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import FormikTextArea from "../../components/Formik/FormikTextArea";
import { HOME_PATH } from "../../routes/consts";
import { NewContent } from "../../types/content";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useAddContent } from "../../hooks/content";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const initialValues: NewContent = {
  title: "",
  description: "",
};

const validationSchema: Yup.ObjectSchema<NewContent> = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const Add = () => {
  const navigate = useNavigate();
  const { authToken } = useContext(UserContext);
  const { mutateAsync: addContent } = useAddContent();

  const handleSubmit = (values: NewContent) => {
    addContent({ content: values, token: authToken })
      .then(() => {
        toast.success("New Skill Added!");
        navigate(HOME_PATH);
      })

      .catch((error) => {
        console.error(error);
        toast.error("Failed to add new skill!");
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
            <h1>Add New Skill</h1>
            <RowContainer>
              <FormikInput type="text" name="title" placeholder="Title" />
            </RowContainer>
            <RowContainer>
              <FormikTextArea type="text" name="description" placeholder="Description" />
            </RowContainer>
            <RowContainer>
              <Button variant="primary" disabled={isSubmitting}>
                Add new Skill
              </Button>
            </RowContainer>
          </StyledForm>
        )}
      </Formik>
    </PageContainer>
  );
};

export default Add;

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
`;
