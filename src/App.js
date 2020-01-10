import React from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/Navbar";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="container">
      <Navbar onSignOut={() => Auth.signOut()} />
    </div>
  );
}

export default withAuthenticator(App, false);
