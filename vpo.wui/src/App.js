import { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NavMenu from "./components/Layout/Nav/NavMenu";
import SecureRoute from "./libs/SecureRoute";
//HomePage
import HomePage from "./components/Home/HomePage";

//Modal
import ModalManager from "./libs/ModalManager";


import configureStore from "./store/reducers/configureStore";
const store = configureStore();
class App extends PureComponent{
  render(){
    return(
      <>
      <NavMenu>
        <Layout>
          <Provider store={store}>
            <ModalManager>
              <Router>
                
                <Switch>
                <SecureRoute exact path="/" component={HomePage} />

                </Switch>


              </Router>
            </ModalManager>
          </Provider>
        </Layout>
      </NavMenu>
      
      </>
    )
  }
}

export default App;
