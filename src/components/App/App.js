import React, { useState } from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";

import Yelp from "../../utils/Yelp";

const App = () => {
  const [ businesses, setBusinesses ] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className={ styles.App }>
      <h1>ravenous</h1>
      <div>
        <SearchBar
          searchYelp={ searchYelp }
        />
        <BusinessList 
          businesses={ businesses }
        />
      </div>
    </div>
  );
}

export default App;
