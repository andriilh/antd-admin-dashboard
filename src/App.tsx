import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import Login from "@pages/auth/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  // const auth = useSelector((state:RootState) => state.auth);
	// return <RouterProvider router={routes} />;
  return <Login />
}

export default App;
