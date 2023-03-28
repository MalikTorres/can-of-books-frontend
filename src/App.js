import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About'
import './index.css'

class App extends React.Component {

  render() {
    return (
      <>
      <body>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
              >
            </Route>
            <Route
              exact path="/About"
              element={<About />}
              >

            </Route>
          </Routes>
          <Footer />
        </Router>
                </body>
      </>
    )
  }
}

export default App;
