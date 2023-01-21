
import { createBrowserRouter as Router , RouterProvider as Routes} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPwd from "./pages/ForgetPwd";
const router = Router([
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

function App() {
  return (
    <>
      
      <Routes router={router} />
    </>
  );
}

export default App;
