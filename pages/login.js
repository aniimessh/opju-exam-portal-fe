import { OpButton } from "@/atoms";
import OpTextField from "@/atoms/TextField";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import { fontWeight } from "@mui/system";

const Wrapper = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "40%",
  width: "30%",
  justifyContent: "space-around",
});

const ButtonContainer = styled(Box)({
  textAlign: "center",
});

const login = () => {
  function handleLog() {
    console.log("hello");
  }
  return (
    <Wrapper>
      <Container>
        <Typography style={{fontSize:'2rem', fontWeight:'bold'}}>Sign in</Typography>
        <OpTextField label="Username" variant="outlined" event={handleLog} />
        <OpTextField label="Password" variant="outlined" event={handleLog} />
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="Student"
            control={<Radio />}
            label="Student"
          />
          <FormControlLabel
            value="Instructor"
            control={<Radio />}
            label="Instructor"
          />
        </RadioGroup>
        <ButtonContainer>
          <OpButton
            variant="contained"
            mright="10px"
            event={handleLog}
            width="100%"
            height="50px"
          >
            Log in
          </OpButton>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};
export default login;
