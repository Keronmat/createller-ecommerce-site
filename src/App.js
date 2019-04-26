import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import MainContent from "./components/mainContent/mainContent";

class App extends Component {
  render() {
    return (
      <div className="container-fixed">
        <Layout>
          <MainContent />
        </Layout>
      </div>
    );
  }
}

export default App;
