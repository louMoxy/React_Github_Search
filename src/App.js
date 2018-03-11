import React, { Component } from "react";
import { ReactiveBase, DataSearch } from "@appbaseio/reactivesearch";
import { render } from "react-dom";
import Results from "./components/Results";
import Header from "./components/Header";

import theme from "./theme";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTopics: []
    };
  }

  setTopics = currentTopics => {
    this.setState({
      currentTopics: currentTopics || []
    });
  };

  toggleTopic = topic => {
    const { currentTopics } = this.state;
    const nextState = currentTopics.includes(topic)
      ? currentTopics.filter(item => item !== topic)
      : currentTopics.concat(topic);
    this.setState({
      currentTopics: nextState
    });
  };

  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="gitxplore-app"
          credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
          type="gitxplore-latest"
          theme={theme}
        >
          <Header
            currentTopics={this.state.currentTopics}
            setTopics={this.setTopics}
          />
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
              <Results
                currentTopics={this.state.currentTopics}
                toggleTopic={this.toggleTopic}
              />
            </div>
          </div>
        </ReactiveBase>
      </section>
    );
  }
}

render(<App />, document.getElementById("root"));
