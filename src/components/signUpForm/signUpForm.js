import React from "react";
import classes from "./signUpForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SignUpForm(props) {
  return (
    <div className={classes.signUpForm}>
      <div className="row">
        <h4 className="col-8">Sign up</h4>
        <button
          onClick={() => props.modalClosed()}
          className={[classes.close, "col-4"].join(" ")}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div>
        <form>
          <div className={[classes.formInput, "form-row"].join(" ")}>
            <div>
              <input type="text" placeholder="first name" />
            </div>
            <div>
              <input type="text" placeholder="last name" />
            </div>
            <div>
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div className={classes.formButtonGroup}>
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className={classes.formButton}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm ml-auto"
                  onClick={() => props.modalClosed()}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm ml-1">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={classes.signIn}>
        <button onClick={() => props.toggleSignupForm()}>
          Already have an account?
        </button>
      </div>
    </div>
  );
}
