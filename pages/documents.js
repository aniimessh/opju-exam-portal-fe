import { OpButton } from "@/atoms";
import { OpLoadingButton } from "@/atoms/Button/OpButton.style";
import OpTextField from "@/atoms/TextField";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Documents = () => {
  const handleLog = () => {
    console.log("opbutton");
  };

  return (
    <div className={inter.className}>
      <h1>Button</h1>
      <OpButton variant="contained" mright="10px" event={handleLog}>
        Microsoft 1
      </OpButton>
      <OpButton variant="outlined" mright="10px" event={handleLog}>
        Microsoft 2
      </OpButton>

      <p>Props: </p>
      <ul>
        <li>
          <strong>variant</strong> - "contained", "outlined" <br />
          <strong>type</strong> - string
        </li>
        <br />
        <li>
          <strong>mright</strong> - "10px", "10rem", etc... <br />
          <strong>type</strong> - string
        </li>
        <br />
        <li>
          <strong>event</strong> - "function(){}", "handleLog"
          <br />
          <strong>type</strong> - function
        </li>
        <br />
      </ul>

      <br />

      <h1>Loading Button</h1>

      <OpLoadingButton loading={true} variant="outlined" disabled />

      <p>Props: </p>
      <ul>
        <li>
          <strong>variant</strong> - "outlined"
          <br />
          <strong>type</strong> - string
        </li>
        <br />
        <li>
          <strong>mright</strong> - "10px", "10rem", etc... <br />
          <strong>type</strong> - string
        </li>
        <br />
        <li>
          <strong>loading</strong> - "false", "true"
          <br />
          <strong>type</strong> - boolean
        </li>
        <br />
      </ul>

      <br />

      <h1>TextField</h1>
      <OpTextField label="Outlined" variant="outlined" event={handleLog} />
      <br />
      <br />
      <OpTextField label="Filled" variant="filled" event={handleLog} />

      <p>Props: </p>
      <ul>
        <li>
          <strong>variant</strong> - "outlined", "filled"
          <br />
          <strong>type</strong> - string
        </li>
        <br />
        <li>
          <strong>label</strong> - "give a value for placeholder"
          <br />
          <strong>type</strong> - string
        </li>
        <br />
        <li>
          <strong>event</strong> - "function(){}", "handleLog"
          <br />
          <strong>type</strong> - function
        </li>
        <br />
      </ul>

      <br />
    </div>
  );
};

export default Documents;
