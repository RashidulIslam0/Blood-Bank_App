import React from "react";
import InputType from "../../components/shared/Form/InputType";

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner1.jpg" alt="loginImage" />
        </div>
        <div className="col-md-4 form-container">
          <form>
            <InputType
              labelText={"Email"}
              labelFor={"forEmail"}
              intpuType={"email"}
              name={"email"}
            />
            {/* <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
            </div> */}
            {/* <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div> */}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
