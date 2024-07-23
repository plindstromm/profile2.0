import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";

function App() {

  const router = createBrowserRouter([
      {
          path: '/',
          element: <Landing />
          
      },
      {
          
      }
  ]);

  return (
      <div className='App'>
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
