import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

function NewQuote() {
  const History = useHistory();

  function addQuoteHandler(quoteData) {
    console.log(quoteData);
    History.push("/quotes");
  }
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
export default NewQuote;
