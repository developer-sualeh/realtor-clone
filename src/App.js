
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPwd from "./pages/ForgetPwd";
import Header from "./components/Header";
/*const router = Router([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/sign-in",
    element:<SignIn />,
  },{
    path: "/sign-up",
    element: <SignUp />,
  },{
    path: "/forget-password",
    element: <ForgetPwd />,
  },{
    path: "/offers",
    element: <Offers />,
  },
]);
*/
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/sign-in" element={<SignIn />}/>
          <Route exact path="/sign-up" element={<SignUp />}/>
          <Route exact path="/forget-password" element={<ForgetPwd />}/>
          <Route exact path="/offers" element={<Offers />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
