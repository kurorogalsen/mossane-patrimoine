import React from "react";
import Navbar from "./Navbar";
import Main from "./main/Main";
import Cabinet from "./../pages/Cabinet";
import Prive from "./../pages/Prive";
import Professionnelle from "./../pages/Professionnelle";
import Formations from "./../pages/Formations";
import Espacesportif from "./../pages/Espacesportif";
import Actualites from "./../pages/Actualites";
import Errorhttp from "./../pages/Errorhttp";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="my-app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/mossane-patrimoine/" exact component={Main} />
          <Route path="/" exact component={Main} />
          {/*<Route path="/cabinet/" exact component={Cabinet} />*/}
           <Route path="/prive/" exact component={Prive} />
          <Route path="/professionnelle/" exact component={Professionnelle} />
          <Route path="/formations/" exact component={Formations} />
          <Route path="/espaceSportif/" exact component={Espacesportif} />
          <Route path="/actualites/" exact component={Actualites} />
          <Route path="/" component={Errorhttp}/>
        </Switch>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
