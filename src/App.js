import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import Admin from './Pages/Admin';
import Edit from './Pages/EditPage';
import ProductList from './Pages/ProductList';
import { Mycontext } from './Context/Context';
const App = () => {
  const { list } = useContext(Mycontext);
  useEffect(() => {
    if ((localStorage.getItem = null || localStorage.getItem !== list)) {
      localStorage.setItem('data', JSON.stringify(list));
    }
  });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/admin' component={Admin} />
        <Route path='/edit/:id' component={Edit} />

        <Route path='/cart' component={Cart} />
        <Route path='/products' component={ProductList} />
      </Switch>
    </Router>
  );
};

export default App;
