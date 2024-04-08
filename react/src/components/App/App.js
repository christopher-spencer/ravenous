import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";

import Yelp from "../../utils/Yelp";
import BusinessDetails from "../BusinessDetails/BusinessDetails";
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
        <Routes>
        <Route
            path="/"
            element={
              <div>
                <SearchBar searchYelp={searchYelp} />
                <BusinessList businesses={businesses} />
              </div>
            }
          />
          <Route path="/business/:id" element={<BusinessDetails businesses={businesses} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
