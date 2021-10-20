import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Pages/Banner/Banner';
import Header from './Pages/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Doctors from './Pages/Doctors/Doctors';
import Error from './Pages/Error/Error';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AboutUs from './Pages/AboutUs/AboutUs';
import Appointment from './Pages/Appointment/Appointment';

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
              <Doctors></Doctors> 
            </Route>
            <Route path="/home">
               <Banner></Banner>
              <Services></Services>
              <Doctors></Doctors> 
              
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/team">
              <Doctors></Doctors>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/booking">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
            <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
