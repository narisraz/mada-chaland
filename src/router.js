import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./components/layout";
import Offer from "./pages/offer";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/offer/:offerId",
        element: <Offer />,
      },
    ],
  },
]);

export default router;
