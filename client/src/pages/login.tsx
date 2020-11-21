import React from "react";
import { Form, Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputFields } from "../components/InputFields";
import { useMutation } from "urql";

interface loginProps {}

const LOGIN_MUTATION = `
mutation Login($username: String!, $password: String!) {
  login(options:{
    username: $username,
    password: $password
  }) {
    errors {
      field
      message
    }
    user {
      id
      createdAt
      updatedAt
      username
    }
  }
}`;

const Login: React.FC<loginProps> = ({}) => {
  const [, login] = useMutation(LOGIN_MUTATION);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          return login(values);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputFields
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputFields
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Box mt={4}>
              <Button type="submit" variant="teal" isLoading={isSubmitting}>
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
