import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRouter";
import DashBoard from "./Components/Dashboard";


function App() {
//logic goes here
 

  return (
     <>
       <Routes>
          <Route path="/" element={
                <PrivateRoute>
                  <DashBoard/>
                </PrivateRoute>
          }/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
       </Routes>
     </>
     );
}

export default App;