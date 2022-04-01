// import React, { useState } from 'react';
import { Route , Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';


function App() {

  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path='/' exact>
            <Redirect to='/welcome'/>
        </Route>
        <Route path="/welcome" >
            <Welcome />
        </Route>
        <Route path="/products" exact >
          <Products />
        </Route>
        <Route path="/products/:productId" >
          <ProductDetail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
