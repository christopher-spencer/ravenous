import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState("best_match");
  const [errorMessage, setErrorMessage] = useState('');

  // Event handler to when sortByOptions is clicked
  const selectSortByOption = (sortByOption) => {
    if (sortBy === sortByOption) {
      return styles.active;
    }
    return "";
  };

  // State setter when sortByOptions is selected
  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  // State setter when input term has been filled out
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  // State setter when location input has been filled out
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // State setter when Enter or Return in keyboard has been pressed
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchYelp(term, location, sortBy);
    }
  };

  // State setter when submit button has been clicked
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!term.trim() || !location.trim()) {
      setErrorMessage("Fill in the required fields to search");

      // Reset the error message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setErrorMessage("");
      searchYelp(term, location, sortBy);
    }
  };

  // Adding key to each filter options
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={selectSortByOption(sortByOptionValue)} // To toggle .active class in CSS
          key={sortByOptionValue} // Key for Yelp API 
          onClick={() => {
            handleSortByChange(sortByOptionValue)
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      {/* Filters for search requests */}
      <div className={styles.SearchBarSortOptions}>
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>

      {/* Search bars */}
      <form
        onKeyDown={handleKeyPress}
        onSubmit={handleSubmit}
      >
        <div className={styles.SearchBarFields}>
          <input
            name="term"
            placeholder="What are you craving for?"
            onChange={handleTermChange}
            minLength={1}
            maxLength={250}
          />
          <input
            name="location"
            placeholder="Where?"
            onChange={handleLocationChange}
          />
        </div>

        <div className={ styles.MessageContainer }>
          {errorMessage && (
            <p className={styles.ErrorMessage}>{errorMessage}</p>
          )}
        </div>

        {/* Submit button */}
        <div className={styles.SearchBarSubmit}>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;