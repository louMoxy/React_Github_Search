import React, { Component } from "react";
import { ReactiveBase, DataSearch } from "@appbaseio/reactivesearch";
import { render } from "react-dom";
import Results from "./components/Results";
import Header from "./components/Header";

import theme from "./theme";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="gitxplore-app"
          credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
          type="gitxplore-latest"
          theme={theme}
        >
          <Header />
          <div className="flex row-reverse app-container">
            <div className="results-container">
              <DataSearch
                componentId="repo"
                filterLabel="Search"
                dataField={[
                  "name",
                  "description",
                  "name.raw",
                  "fullname",
                  "owner",
                  "topics"
                ]}
                placeholder="Search Repos"
                autosuggest={false}
                iconPosition="left"
                URLParams
                className="data-search-container results-container"
                innerClass={{
                  input: "search-input"
                }}
              />
              <Results />
            </div>
          </div>
        </ReactiveBase>
      </section>
    );
  }
}

render(<App />, document.getElementById("root"));
