import React from "react";
import { useParams } from "react-router-dom";

const BusinessDetails = ({ businesses }) => {
  // Get the business ID from the URL params
  const { id } = useParams();

  // Find the business with the matching ID
  const business = businesses.find((b) => b.id === id);

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{business.name}</h2>
      <img src={business.imageSrc} alt={business.name} />
      <p>Address: {business.address}</p>
      <p>City: {business.city}</p>
      <p>State: {business.state}</p>
      <p>ZIP Code: {business.zipCode}</p>
      <p>Category: {business.category}</p>
      <p>Rating: {business.rating} stars</p>
      <p>Review Count: {business.reviewCount} reviews</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BusinessDetails;
