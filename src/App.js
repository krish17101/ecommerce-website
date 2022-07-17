import React from 'react';
import { BrowserRouter as Switch,  Route} from 'react-router-dom';

import './App.css';



import HomePage from './pages/homepage/homepage.components';
import ShopPage from './shop/shop.components';
import SignInAndSignUpPage from './pages/signin-and-signup/sign-in-and-sign-up.component';
import Header from './components/header/header.component';



function App() {
  return (
   
   
   <div>
  
 
   <Switch>
   <Header /> 
   
    
      
      <Route exact path='/' component={HomePage} />
      <Route path='/shop'  component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage}/>

   

      </Switch>
      </div>
   );
}

export default App;
