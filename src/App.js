import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import SignUp from "./Pages/SignUp/SignUp";
import Blogs from "./Pages/Blogs/Blogs";
import Team from "./Pages/Team/Team";
import SignIn from "./Pages/SignUp/signin";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              <ServicePage></ServicePage>
            </PrivateRoute>
            <PrivateRoute path="/services/:slug">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <PrivateRoute path="/blogs">
              <Blogs> </Blogs>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
