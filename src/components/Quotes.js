import React from "react"; 
import QuoteCard from "./QuoteCard";

const Quotes = () => {
    return (
        <section className="all-quotes">
            <div className="quotes">
                <div className="wrapper">
                {Quotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
                </div>
            </div>
        </section>
    )
};

export default Quotes;
