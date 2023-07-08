import { OpButton } from "@/atoms";
import OpTextField from "@/atoms/TextField";

const login = () => {
  function handleLog() {
    console.log("hello");
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main-container">
            <h1>Sign in</h1>
            <OpTextField
              label="Email/Enrollment Number"
              variant="outlined"
              event={handleLog}
            />
            <OpTextField
              label="Password"
              variant="outlined"
              event={handleLog}
            />
          <div className="button-container">
            <OpButton variant="contained" mright="10px" event={handleLog()}>
              Log in
            </OpButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default login;
