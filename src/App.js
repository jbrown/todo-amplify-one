import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(awsconfig);

function App() {
  return <div className="App">App</div>;
}

export default withAuthenticator(App, true);
