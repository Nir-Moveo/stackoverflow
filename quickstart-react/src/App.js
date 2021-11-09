import React from "react";
import "./App.css";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"
import { Search } from "./components/Search";



class App extends React.Component {
  constructor(props) {
    super(props); 

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {

    return <div className="App">
      <AttentionBox
        title="Hello Monday Apps!"
        text="Let's start building your amazing app, which will change the world!"
        type="success"
      />
      <Search/>
      
    </div>;
  }
}

export default App;
