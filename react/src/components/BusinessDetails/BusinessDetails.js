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
        <div>
            <div className={styles.businessDetailsContainer}>
                <div className={styles.businessDetails}>
                    <div className={styles.imageContainer}>
                        <img src={business.imageSrc} alt={business.name} />
                    </div>
                    <h2>{business.name}</h2>
                    <div className={styles.details}>
                        <div className={styles.address}>
                            <p>{business.address}</p>
                            <p>{business.city}</p>
                            <p>{business.state}</p>
                            <p>{business.zipCode}</p>
                        </div>
                        <div className={styles.categoryRatingReviewContainer}>
                            <h3>{business.category.toUpperCase()}</h3>
                            <h3>{business.rating} stars</h3>
                            <p>{business.reviewCount} reviews</p>
                        </div>
                    </div>

                    <div className={styles.ReturnToBusinessesContainer}>
                        <Link to={"/"} className={styles.ReturnToBusinessesLink}>
                            Return to Businesses
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.troughChefImageContainer}>
                <img className={styles.troughChefImage}
                    src={require("./trough-chef.jpg")}
                    alt="Trough Chef"
                />
            </div>
        </div>
    );
};

export default BusinessDetails;
