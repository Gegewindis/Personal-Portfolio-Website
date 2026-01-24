import Home from "./pages/home.jsx"
import Melicus from "./pages/melicus_page.jsx"
import SimSim from "./pages/simsim_page.jsx"
import FloodFill from "./pages/floodfill_page.jsx"
import NotFoundPage from "./pages/notFoundPage.jsx"
import Editor from "./pages/editor_page.jsx"

import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/Personal-Portfolio-Website/", element: <Home /> },
      { path: "/malicus_project", element: <Melicus /> },
      { path: "/simsim_project", element: <SimSim /> },
      { path: "/floodfill_project", element: <FloodFill /> },
      { path: "/editor_project", element: <Editor /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
function App() {

  return(
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App
