import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

function App() {
  let [users, setUsers] = React.useState(false);
  let [inputsChecked, setInputsChecked] = React.useState([]);
  let [inputValue, setInputValue] = React.useState("");

  let sortByName = (a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  };

  async function fetchData() {
    try {
      let response = await fetch(
        "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
      );
      let responseJson = await response.json();
      responseJson = responseJson.sort(sortByName);
      setUsers(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  let usersFiltered = undefined;

  if (users !== false) {
    usersFiltered = users.filter((data) => {
      if (inputValue === "") {
        return data;
      }
      if (
        data.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
        data.last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
        (
          data.first_name.toLowerCase() +
          " " +
          data.last_name.toLowerCase()
        ).includes(inputValue.toLowerCase())
      ) {
        return data;
      }
    });

    usersFiltered = usersFiltered.map((userData) => {
      return (
        <User
          userData={userData}
          inputsChecked={inputsChecked}
          setInputsChecked={setInputsChecked}
          usersFiltered={usersFiltered}
        />
      );
    });
  }

  if (users !== false) {
    return (
      <div>
        <Header />
        <Search setInputValue={setInputValue} />
        {usersFiltered}
      </div>
    );
  } else {
    return <div loadData={fetchData()}>Loading...</div>;
  }
}

export default App;
