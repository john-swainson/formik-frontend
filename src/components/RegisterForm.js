import { Formik, Field, Form } from "formik";
import { isEmpty } from "lodash";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import { Button, CustomInput } from "../components/atoms";
import sampleData from "../assets/jsons/sample.json";
import { update } from "../store/feature/user";
import { UserValidationSchema } from "../utils";

const FormWrapper = styled.div`
  display: grid;
  gap: 16px;

  ${breakpoint("md")`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

const RegisterForm = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const initialFormState = useMemo(() => {
    if (isEmpty(userState)) {
      return sampleData.reduce((prev, cur) => {
        return {
          ...prev,
          [cur.id]: '',
        }
      }, {});
    }
    return userState;
  }, [userState]);

  return (
    <Formik
      initialValues={initialFormState}
      validationSchema={UserValidationSchema}
      onSubmit={(values) => {
        dispatch(update(values));
      }}
    >
      <Form>
        <FormWrapper>
          {sampleData.map((field) => (
            <StyledFormRow key={field.id}>
              <label htmlFor={field.id}>{field.label ?? field.placeholder}</label>
              <Field
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                component={CustomInput}
                type={field.type}
              >
                {field.type === "select"
                  ? field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))
                  : null}
              </Field>
            </StyledFormRow>
          ))}
        </FormWrapper>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
