import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Group 14.png";
import AuthContext from "../context/AuthContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { signUpUser, token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={logo} alt="" mb={5} width={{ base: "10px", lg: "50px" }} />
        <Text color={'green.50'} mb={5}>Create your &#8358;airaland account</Text>
        <Text mb={5}>
          Already have an account? <Link to="/login">Log in.</Link>
        </Text>
      </Box>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            username,
            email,
            password,
          };
          signUpUser(formData);
          console.log(formData);
        }}
      >
        <FormControl isRequired>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            id="email"
            mb={5}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            name="text"
            type="text"
            placeholder="Username"
            autoComplete="username"
            id="username"
            mb={5}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            id="password"
            mb={5}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Text mb={5}>
          By creating an account, you agree to Nairaland's Terms of Use and
          Privacy Policy. You understand Nairaland and its affiliates may use
          your address to send updates, ads, and offers.
        </Text>
        <Button
          mb={5}
          type="submit"
          colorScheme="red"
          // px={{ sm: 50, base: 130, md: 250 }}
        >
          Create Account
        </Button>
        <Text mb={5}>
          You can opt out or learn more about your rights via the Privacy
          Policy.
        </Text>
      </Form>
    </Box>
  );
};

export default SignUp;
