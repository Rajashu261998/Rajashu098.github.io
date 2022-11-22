import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Field } from "formik";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const toast = useToast();
  return (
    <section id='contact'>
      <Center h={"full"}>
        <VStack>
          <VStack
          // mt={"10"}
          >
            <Heading mt={0}>Get in Touch</Heading>
          </VStack>
          <Box boxShadow={"xl"} p={6} rounded='md' w={["90%", "md"]}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              onSubmit={(values) => {
                emailjs
                  .send(
                    "service_dny2nk9",
                    "template_nx8jbei",
                    values,
                    "qzRmKt4iAGOlb3hNN"
                  )
                  .then(
                    function (response) {
                      console.log(
                        "SUCCESS!",
                        response.status,
                        response.text,
                        response
                      );
                      toast({
                        title: "Message Sent",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                    },
                    function (error) {
                      console.log("FAILED...", error);
                      toast({
                        title: "Failed",
                        description: error.text,
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                      });
                    }
                  );
                // alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align='flex-start'>
                    <FormControl>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                      <Field
                        as={Input}
                        id='name'
                        name='name'
                        type='name'
                        variant='filled'
                      ></Field>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor='email'>Email Address</FormLabel>
                      <Field
                        as={Input}
                        id='email'
                        name='email'
                        type='email'
                        variant='filled'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor='message'>Message</FormLabel>
                      <Field
                        as={Textarea}
                        id='message'
                        name='message'
                        type='name'
                        variant='filled'
                      />
                    </FormControl>
                    {/* <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor='password'>Password</FormLabel>
                      <Field
                        as={Input}
                        id='password'
                        name='password'
                        type='password'
                        variant='filled'
                        validate={(value) => {
                          let error;

                          if (value.length < 5) {
                            error =
                              "Password must contain at least 6 characters";
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl> */}
                    <Button type='submit' colorScheme='purple' width='full'>
                      Send
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
        </VStack>
      </Center>
    </section>
  );
};

export default Contact;
