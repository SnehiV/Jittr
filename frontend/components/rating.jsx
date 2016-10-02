import React from 'react';
import Rating from 'react-rating';

export const RatingDisplay = ({rating}) => {
  let coffeeCupRatings = [];

  let greyCup = <div className="untoggled-cups">
                  <i className="fa fa-coffee" aria-hidden="true"></i>
                </div>;
  let colorCup = <div className="toggled-cups">
                  <i className="fa fa-coffee" aria-hidden="true"></i>
                 </div>;

  return(
    <div className="rating-cups">
      <Rating initialRate={rating}
        empty={greyCup} full={colorCup}
        placeholder={colorCup}
        fractions={2}
        readonly={true} />
    </div>
  );
};
