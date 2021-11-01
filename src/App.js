import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import AddItem from "./Component/AddItem/AddItem";
import Order from "./Component/Order/Order";
import Login from "./Component/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Appbar from "./Component/Appbar/Appbar";
import PrivateRoute from "./Component/Login/PrivateRoute/PrivateRoute";
import AddDetail from "./Component/AddDetail/AddDetail";
import MyOrders from "./Component/Admin/MyOrders/MyOrders";
import ManageOrder from "./Component/Admin/ManageOrders/ManageOrder";
import NewItem from "./Component/Admin/NewItem/NewItem";
import UpdateUser from "./Component/UpdateUser/UpdateUser";
import './App.css';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Appbar></Appbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/addItem">
              <AddItem></AddItem>
            </Route>

            <Route path="/addDetail">
              <AddDetail></AddDetail>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>

            <PrivateRoute path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/allOrder">
             <ManageOrder></ManageOrder>
            </PrivateRoute>
            
            <PrivateRoute path="/newItem">
             <NewItem></NewItem>
            </PrivateRoute>
            
            <PrivateRoute path="/order/:itemId">
              <Order></Order>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
