import { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NavMenu from "./components/Layout/Nav/NavMenu";
import SecureRoute from "./libs/SecureRoute";
//HomePage
import HomePage from "./components/Home/HomePage";

//User
import UserList from "./components/Users/UserList";
import UserEdit from "./components/Users/UserEdit";
import UserNew from "./components/Users/UserNew";
import UserDelete from "./components/Users/UserDelete";
//Role
import RoleList from "./components/Roles/RoleList";
import RoleEdit from "./components/Roles/RoleEdit";
import RoleNew from "./components/Roles/RoleNew";
import RoleDelete from "./components/Roles/RoleDelete";
//Pet
import PetList from "./components/Pets/PetList";
import PetEdit from "./components/Pets/PetEdit";
import PetNew from "./components/Pets/PetNew";
import PetDelete from "./components/Pets/PetDelete";
//Modal
import ModalManager from "./libs/ModalManager";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";


import configureStore from "./store/reducers/configureStore";
const store = configureStore();
class App extends PureComponent{
  render(){
    return(
      <>
      <NavMenu/>
        <Layout>
          <Provider store={store}>
            <ModalManager>
              <Router>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
                <Switch>
                <SecureRoute exact path="/" component={HomePage} />
                <SecureRoute exact path="/users-list" component={UserList} />
                <SecureRoute exact path="/users-edit/:id" component={UserEdit} />
                <SecureRoute exact path="/users-delete/:id" component={UserDelete} />
                <SecureRoute exact path="/users-new" component={UserNew} />
                <SecureRoute exact path="/roles-list" component={RoleList} />
                <SecureRoute exact path="/roles-edit/:id" component={RoleEdit} />
                <SecureRoute exact path="/roles-delete/:id" component={RoleDelete} />
                <SecureRoute exact path="/roles-new" component={RoleNew} />
                <SecureRoute exact path="/pets-list" component={PetList} />
                <SecureRoute exact path="/pets-edit/:id" component={PetEdit}/>
                <SecureRoute exact path="/pets-delete/:id" component={PetDelete}/>
                <SecureRoute exact path="/pets-new" component={PetNew} />
                </Switch>
              </Router>
            </ModalManager>
          </Provider>
        </Layout>
        
      </>
    )
  }
}

export default App;
