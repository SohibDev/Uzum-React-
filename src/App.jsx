import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Button from './components/Button';
import Cards from "./components/Cards";
import Header from "./components/Header";
import Carousel from "./components/Swiper.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />,
        <div className="mt-24">
          <Carousel />
        </div>
        <div>
          <Button />
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
