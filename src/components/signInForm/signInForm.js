import React from "react";
import classes from "./signInForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SignInForm(props) {
  return (
    <div className={classes.signInForm}>
      <div className="row">
        <h4 className="col-8">Login</h4>
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
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div className={classes.formButtonGroup}>
              <div>
                <input type="checkbox" id="rememberMe" />
                <label for="rememberMe">Remember me</label>
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
    </div>
  );
}
