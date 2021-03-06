import './App.css';
import { Button, Grid, Typography } from "@material-ui/core";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './mainpage';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>

      </Router>
    </div>

  );
}

export default App;
