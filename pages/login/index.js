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
import { useState } from "react";

const Login = () => {
  const [isLoading, setisLoading] = useState(false);

  function handleAPICall() {
    setisLoading(true);
    setTimeout(() => setisLoading(false), 2000);
  }

  return (
    <OpWrapper>
      <OpLoginBox>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Box mt={5}>
          <OpTextField
            label="Username"
            variant="outlined"
            event={() => {}}
            width="100%"
            sx={{
              marginBottom: "2rem",
            }}
          />
          <OpTextField
            label="Password"
            variant="outlined"
            event={() => {}}
            width="100%"
            sx={{
              marginBottom: "2rem",
            }}
          />
          <FormControl
            sx={{
              marginBottom: "1rem",
            }}
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
              />
              <FormControlLabel
                value="faculty"
                control={<Radio />}
                label="Faculty"
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
