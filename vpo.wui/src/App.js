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
//Product
import ProductList from "./components/Products/ProductList";
import ProductEdit from "./components/Products/ProductEdit";
import ProductNew from "./components/Products/ProductNew";
import ProductDelete from "./components/Products/ProductDelete";

//Customer
import CustomerList from "./components/Customers/CustomerList";
import CustomerEdit from "./components/Customers/CustomerEdit";
import CustomerNew from "./components/Customers/CustomerNew";
import CustomerDelete from "./components/Customers/CustomerDelete";

//Supplier
import SupplierList from "./components/Suppliers/SupplierList";
import SupplierEdit from "./components/Suppliers/SupplierEdit";
import SupplierNew from "./components/Suppliers/SupplierNew";
import SupplierDelete from "./components/Suppliers/SupplierDelete";

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
                <SecureRoute exact path="/products-list" component={ProductList} />
                <SecureRoute exact path="/products-edit/:id" component={ProductEdit}/>
                <SecureRoute exact path="/products-delete/:id" component={ProductDelete}/>
                <SecureRoute exact path="/products-new" component={ProductNew} />
                <SecureRoute exact path="/customers-list" component={CustomerList} />
                <SecureRoute exact path="/customers-edit/:id" component={CustomerEdit} />
                <SecureRoute exact path="/customers-delete/:id" component={CustomerDelete} />
                <SecureRoute exact path="/customers-new" component={CustomerNew} />
                <SecureRoute exact path="/suppliers-list" component={SupplierList} />
                <SecureRoute exact path="/suppliers-edit/:id" component={SupplierEdit} />
                <SecureRoute exact path="/suppliers-delete/:id" component={SupplierDelete} />
                <SecureRoute exact path="/suppliers-new" component={SupplierNew} />


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
