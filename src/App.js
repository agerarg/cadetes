import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//css imports
import './css/style.css';
import './css/responsive.css';
import './css/dropmenu.css';
import Header from './componentes/header';
import Main from './componentes/main';
import Footer from './componentes/footer';
import PlanEstudio from './componentes/planEstudio';
import Horarios from './componentes/horarios';
class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
          <Switch>
              <Route path="/plan" exact component={PlanEstudio} />
              <Route path="/horario/:turno" component={Horarios} />
              <Route path="/" component={Main} />
          </Switch>    
          
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
