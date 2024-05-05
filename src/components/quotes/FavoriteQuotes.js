import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
return (
    <section className='favorite-quotes'>
          <div className='wrapper quotes'>
              <h3>Top 3 Favorite Quotes</h3>
              {favoriteQuotes.length > 0 && (
              <ul>
                {favoriteQuotes.map((quote) => (
                <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} />
                ))}
              </ul> 
                )}
            {favoriteQuotes.length < maxFaves && (
            <div className='favorite-quotes-description'>
              <p>
                You can add up to three favorites by selecting the options below.<br />Favorites will appear once a quote heart has been clicked.
              </p>
            </div>
            )}
          </div>
        </section>
);
}

export default FavoriteQuotes;