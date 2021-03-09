import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

function App() {
  let [users, setUsers] = React.useState(false);

  async function fetchData() {
    try {
      let response = await fetch(
        "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
      );
      let responseJson = await response.json();
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
