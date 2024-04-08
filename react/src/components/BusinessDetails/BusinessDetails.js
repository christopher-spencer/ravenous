import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./BusinessDetails.module.css";

const BusinessDetails = ({ businesses }) => {
  // Get the business ID from the URL params
  const { id } = useParams();

  // Find the business with the matching ID
  const business = businesses.find((b) => b.id === id);

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.businessDetailsContainer}>
        <div className={styles.businessDetails}>
        <h2>{business.name}</h2>
        <div className={styles.imageContainer}>
            <img src={business.imageSrc} alt={business.name} />
        </div>
        <p>Address: {business.address}</p>
        <p>City: {business.city}</p>
        <p>State: {business.state}</p>
        <p>ZIP Code: {business.zipCode}</p>
        <p>Category: {business.category}</p>
        <p>Rating: {business.rating} stars</p>
        <p>Review Count: {business.reviewCount} reviews</p>
        </div>
        <div className={styles.ReturnToBusinessesContainer}>
            <Link to={"/"} className={styles.ReturnToBusinessesLink}>
                Return to Businesses
            </Link>
        </div>
    </div>
  );
};

export default BusinessDetails;
