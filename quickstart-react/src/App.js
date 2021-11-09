import React from "react";
import "./App.css"; 
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js";
import { Search } from "./components/Search";



const cardMock = {
  tags: ["react-router", "babel-plugin-react-css-modules"],
  owner: {
    account_id: 2012916,
    reputation: 403,
    user_id: 1800935,
    user_type: "registered",
    accept_rate: 57,
    profile_image: "https://i.stack.imgur.com/jStvl.jpg?s=256&g=1",
    display_name: "evenfrost",
    link: "https://stackoverflow.com/users/1800935/evenfrost",
  },
  is_answered: false,
  view_count: 7,
  answer_count: 3,
  score: 0,
  last_activity_date: 1636388082,
  creation_date: 1636385991,
  last_edit_date: 1636388082,
  question_id: 69886134,
  content_license: "CC BY-SA 4.0",
  link: "https://stackoverflow.com/questions/69886134/using-react-router-v6-with-babel-plugin-react-css-modules",
  title: "Using React Router v6 with babel-plugin-react-css-modules",
  protected_date: 0,
  accepted_answer_id: 0,
};
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
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
