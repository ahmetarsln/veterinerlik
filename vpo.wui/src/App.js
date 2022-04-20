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
//Customer
import CustomerList from "./components/Customers/CustomerList";
import CustomerEdit from "./components/Customers/CustomerEdit";
import CustomerNew from "./components/Customers/CustomerNew";
import CustomerDelete from "./components/Customers/CustomerDelete";
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
                <SecureRoute exact path="/customers-list" component={CustomerList} />
                <SecureRoute exact path="/customers-edit/:id" component={CustomerEdit} />
                <SecureRoute exact path="/customers-delete/:id" component={CustomerDelete} />
                <SecureRoute exact path="/customers-new" component={CustomerNew} />

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
