import React, { useState, useEffect } from 'react';
import styles from './star-rating.module.css';
import { Star } from "./star/star";

export const StarRating = props => {

    const stars = [...Array(5)];
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="App-header">

            <h1>Star Rating</h1>

            <div className={styles.flexContainer}>
                {stars.map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <Star onClick={() => setRating(ratingValue)}
                              onMouseEnter={() => setRating(ratingValue)}
                              onMouseLeave={() => setRating(0)}
                              ratingValue={ratingValue}
                              rating={ rating }
                              hover={ hover }
                              key={i}
                        />
                    )
                    }
                )}
            </div>

        </div>
    );

};

