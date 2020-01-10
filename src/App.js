import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import "bootstrap/dist/css/bootstrap.css";

Amplify.configure(awsconfig);

function App() {
  return <div className="container">App</div>;
}

export default withAuthenticator(App, true);
