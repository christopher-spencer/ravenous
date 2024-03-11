import React from "react";
import styles from "./Business.module.css";

const Business = ({ business }) => {
  return (
      <div className={ styles.business }>
          <a href={ business.url } target="_blank" rel="noopener noreferrer">
              <div className={ styles.ImageContainer }>
                  <img
                      className={ styles.businessImage }
                      alt={ business.name }
                      src={ business.imageSrc }
                  />
              </div>
          </a>
          
          {/* Business Name */}
          <div className={ styles.nameContainer }>
              <h2 className={ styles.businessName }>
                  { business.name }
              </h2>
          </div>

          {/* Business Address */}
          <div className={ styles.businessInfo }>
              <div className={ styles.address }>
                  <p>{ business.address }</p>
                  <p>{ business.city }</p>
                  <p>{ business.state } { business.zipCode }</p>
              </div>

              {/* Business Rating */}
              <div className={ styles.score }>
                  <h3 className={ styles.category }>
                      { business.category }
                  </h3>
                  {
                      ( business.rating === 1 ) ?
                      <p className={ styles.rating }>{ business.rating } star</p> :
                      <p className={ styles.rating }>{ business.rating } stars</p>
                  }

                  {
                      ( business.reviewCount === 1 ) ?
                      <p className={ styles.reviews }>{ business.reviewCount } review</p> :
                      <p className={ styles.reviews }>{ business.reviewCount } reviews</p>
                  }
              </div>
          </div>
      </div>
  );
};

export default Business;