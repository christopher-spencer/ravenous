import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import Business from "../Business/business";
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
    <Router>
      <div className={styles.App}>
        <h1>TROUGH</h1>
        <SearchBar searchYelp={searchYelp} />
        <Routes>
          <Route path="/" element={<BusinessList businesses={businesses} />} />
          <Route path="/business/:id" element={<Business />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
