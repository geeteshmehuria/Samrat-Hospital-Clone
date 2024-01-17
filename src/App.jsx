import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Routers from "./routes/Routers";

function App() {
  return (
    <>
      <Navbar />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
