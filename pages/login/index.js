import { OpButton, OpLoadingButton, OpTextField } from "@/atoms";

import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  styled,
  FormControl,
} from "@mui/material";

import { OpLoginBox, OpWrapper } from "./login.style";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleLoginData = (event) => {
    const { name, value, type } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleAPICall() {
    setisLoading(true);
    try {
      const { email, password, role } = loginData;
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
          role,
        }
      );
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("role", data.user.role);
      const token = window.localStorage.getItem("token", data.token);
      if (token && data.user.role === "student") {
        router.push("/student/dashboard");
      } else if (token && data.user.role === "faculty") {
        router.push("/faculty/dashboard");
      }
    } catch (err) {
      console.log(err.message);
    }
    setisLoading(false);
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const role = window.localStorage.getItem("role");

    if (token && (role==="student")) {
      router.push("/student/dashboard");
    }
    if (token && (role==="faculty")) {
      router.push("/faculty/dashboard");
    }
  }, []);

  return (
    <OpWrapper>
      <OpLoginBox>
        <Typography variant="h4">Welcome</Typography>
        <Box mt={5}>
          <OpTextField
            value={loginData.email}
            label="Username"
            variant="outlined"
            event={() => {}}
            width="100%"
            sx={{
              marginBottom: "2rem",
            }}
            onChange={handleLoginData}
            name="email"
          />
          <OpTextField
            value={loginData.password}
            label="Password"
            variant="outlined"
            event={() => {}}
            width="100%"
            sx={{
              marginBottom: "2rem",
            }}
            name="password"
            onChange={handleLoginData}
          />
          <FormControl
            sx={{
              marginBottom: "1rem",
            }}
            onChange={handleLoginData}
          >
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="student"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
                name="role"
                checked={loginData.role === "student"}
                onChange={handleLoginData}
              />
              <FormControlLabel
                value="faculty"
                control={<Radio />}
                label="Faculty"
                name="role"
                checked={loginData.role === "faculty"}
                onChange={handleLoginData}
              />
            </RadioGroup>
          </FormControl>
        </Box>
        {!isLoading ? (
          <OpButton
            variant="contained"
            mright="10px"
            event={handleAPICall}
            width="100%"
            height="50px"
          >
            Log in
          </OpButton>
        ) : (
          <OpLoadingButton
            loading={true}
            variant="outlined"
            height="50px"
            width="100%"
            disabled
          />
        )}
      </OpLoginBox>
    </OpWrapper>
  );
};
export default Login;
