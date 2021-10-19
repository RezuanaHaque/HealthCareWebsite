import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UseFirebase from './Hooks/UseFirebase';
import Banner from './Pages/Banner/Banner';
import Header from './Pages/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Services from './Pages/Services/Services';
import Eachservice from './Pages/Eachservice/Eachservice';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Doctors from './Pages/Doctors/Doctors';

function App() {
  return (
    <div>


      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Services></Services>
              <Eachservice></Eachservice>
            </Route>
            <Route path="/home">
              <Banner></Banner>
              <Services></Services>
              <Eachservice></Eachservice>
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
