import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import Home from "./pages/Home";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
		  <Routes>
			<Route exact path="/" element={<Home />} />
		  </Routes>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
