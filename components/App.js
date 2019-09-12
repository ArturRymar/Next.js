import React from "react";
import Head from "next/head";
//styles
import { GlobalStyle } from "../styles/cards/cards";

const App = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Head>
      <title>My first apollo app</title>
    </Head>
    <main>{children}</main>
  </React.Fragment>
);
export default App;
