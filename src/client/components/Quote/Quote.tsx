import "./Quote.css";

const Quote = ({
  quote,
}: {
  quote: { quote: string; character: string; anime: string };
}) => (
  <div className="quote-container">
    <p className="quote">"{quote.quote}"</p>
    <p className="quote-author">
      Quote by
      <span className="highlight"> {quote.character} </span>
      from
      <span className="highlight"> {quote.anime}</span>
    </p>
  </div>
);

export default Quote;
