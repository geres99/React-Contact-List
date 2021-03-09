import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

function App() {
  let [users, setUsers] = React.useState(false);

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
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  if (users !== false) {
    return (
      <div>
        <Header />
        <Search />
        {users.map((userData) => (
          <User userData={userData} />
        ))}
      </div>
    );
  } else {
    return <div loadData={fetchData()}>Loading...</div>;
  }
}

export default App;
