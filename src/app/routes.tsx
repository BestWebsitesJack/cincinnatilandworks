import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Careers } from "./pages/Careers";
import { About } from "./pages/About";
import { Residential } from "./pages/Residential";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "residential", Component: Residential },
      { path: "projects", Component: Projects },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "careers", Component: Careers },
    ],
  },
]);
