import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Sneh", text: "There nothing beauiful than soul" },
  { id: "q2", author: "Swami", text: "Nothing is impossible" },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
