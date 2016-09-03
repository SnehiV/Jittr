import React from 'react';

export const Rating = ({rating}) => {
  let coffeeCupRatings = [];
  for (var i = 0; i < 5; i++) {
    let cup;

    if (i < rating) {
      cup = <div className="toggled-cups">
              <i className="fa fa-coffee" aria-hidden="true"></i>
            </div>;
    } else {
      cup = <div className="untoggled-cups">
              <i className="fa fa-coffee" aria-hidden="true"></i>
            </div>;
    }
    coffeeCupRatings.push(cup);
  }

  return(
    <span className='rating-cups'>{coffeeCupRatings}</span>
  );
};
