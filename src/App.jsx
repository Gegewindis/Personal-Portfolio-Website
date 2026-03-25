import Home from "./pages/home.jsx"
import NotFoundPage from "./pages/notFoundPage.jsx"
import ProjectPage from "./pages/projectPage.jsx"

import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/Personal-Portfolio-Website/", element: <Home /> },
      { path: "/Personal-Portfolio-Website/Project-Page/:name", element: <ProjectPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
