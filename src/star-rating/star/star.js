import React from 'react';
import styles from './star.module.css';

export const Star = ({ rating, hover, ratingValue, onClick, onMouseEnter, onMouseLeave }) => {

    let starClass = styles.unrated;
    if (rating && ratingValue <= (hover || rating)) {
        starClass = styles.fillStar;
    }

    return (
        <label className={styles.star}>
            <svg className={ starClass }
                 onMouseEnter={ onMouseEnter }
                 onMouseLeave={ onMouseLeave }
                 height="55px" width="53px" viewBox="0 0 25 23" data-rating="1" >
                <polygon strokeWidth="0"
                    points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                />
            </svg>
            <input type="radio"
                   name="rating"
                   value={ ratingValue }
                   onClick={ onClick }
                   className={styles.radioButton}
            />
        </label>
    );

};

