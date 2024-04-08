import React, { useState } from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";

import Yelp from "../../utils/Yelp";
import Footer from "../Footer/Footer";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className={styles.App}>
      <h1>TROUGH</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
      <Footer />
    </div>
  );
};

export default App;
