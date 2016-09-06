import React from 'react';

export const HoverRater = ({handleHoverClick}) => {
  let coffeeCupRatings = [];

  for (var i = 1; i < 6; i++) {
    let cup =
    <span key={i} style={{cursor: 'pointer', display: 'inline-block', position: 'relative'}} onClick={handleHoverClick(i)}>
      <div className='untoggled-cups'><i className="fa fa-coffee" aria-hidden="true"></i></div>
      <span style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', top: '0px', left: '0px', width: '0%'}}>
        <div className='toggled-cups'><i className="fa fa-coffee" aria-hidden="true"></i></div>;
      </span>
    </span>;

    coffeeCupRatings.push(cup);
  }

  return(
    <span className='rating-cups'>{coffeeCupRatings}</span>
  );
};
