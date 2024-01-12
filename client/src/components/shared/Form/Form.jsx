import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({ submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Add an initial value or set it to an appropriate default value

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />

        <InputType
          labelText={"Email"}
          labelFor={"forEmail"}
          inputType={"email"} // Corrected prop name
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputType
          labelText={"Password"}
          labelFor={"forPassword"}
          inputType={"password"} // Corrected prop name
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex">
          {/* Corrected class name */}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
