import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { TransactionsContextProvider } from "./context/TransactionsContext";

export default function App() {
  return (
    <div className="App">
      <TransactionsContextProvider>
        <Header />
        <Main />
        <Footer />
      </TransactionsContextProvider>
    </div>
  );
}
