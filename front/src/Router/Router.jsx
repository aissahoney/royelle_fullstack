import { createBrowserRouter } from "react-router-dom";

// Home And Main Home1
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";

// All InnerPage
import About from "../Pages/InnerPage/About";
import Room from "../Pages/InnerPage/Room";
import FindRoom from "../Pages/InnerPage/FindRoom";
import RoomDetails from "../Pages/InnerPage/RoomDetails";
import Services from "../Pages/InnerPage/Services";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails";
import Team from "../Pages/InnerPage/Team";
import Pricing from "../Pages/InnerPage/Pricing";
import Blog from "../Pages/InnerPage/Blog";
import BlogDetails from "../Pages/InnerPage/BlogDetails";
import Contact from "../Pages/InnerPage/Contact";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import DashBoard from "../Pages/BackOffice/Dashboard/DashBoard";
import MainDashboard from "../Main/MainDashboard";
import CreateHero from "../Pages/BackOffice/Hero/CreateHero";
import HomeBackoffice from "../Pages/BackOffice/Dashboard/HomeBackoffice";
import UpdateHero from "../Pages/BackOffice/Hero/UpdateHero";
import EditHero from "../Pages/BackOffice/Hero/EditHero";
import EditResort from "../Pages/BackOffice/Resort/EditResort";
import UpdateResort from "../Pages/BackOffice/Resort/UpdateResort";
import UpdateManager from "../Pages/BackOffice/Manager/UpdateManager";
import EditManager from "../Pages/BackOffice/Manager/EditManager";
import UpdateTeam from "../Pages/BackOffice/Team/UpdateTeam";
import EditTeam from "../Pages/BackOffice/Team/EditTeam";
import UpdateArticle from "../Pages/BackOffice/Blog/Articles/UpdateArticle";
import EditArticles from "../Pages/BackOffice/Blog/Articles/EditArticles";
import CreateArticle from "../Pages/BackOffice/Blog/Articles/CreateArticle";


// Starting React Router.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
  
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/find_room",
        element: <FindRoom />,
      },
      {
        path: "/room_details/:id",
        element: <RoomDetails />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/our_team",
        element: <Team />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog_details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },
  {
    path: "/backoffice",
    element: <MainDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/backoffice",
        element: <HomeBackoffice/>,
      },
      // {
      //   path: "/backoffice/dashboard",
      //   element: <DashBoard />,
      // },

      
      // hero
      {
        path: "/backoffice/edit_hero",
        element: <EditHero/>,
      },
      {
        path: "/backoffice/create_hero",
        element: <CreateHero/>,
      },
      {
        path: "/backoffice/update_hero/:id",
        element: <UpdateHero/>,
      },

      // manager
      {
        path: "/backoffice/update_manager/:id",
        element: <UpdateManager/>,
      },
      {
        path: "/backoffice/edit_manager",
        element: <EditManager/>,
      },
      // resort
      {
        path: "/backoffice/update_resort/:id",
        element: <UpdateResort/>,
      },
      {
        path: "/backoffice/edit_resort",
        element: <EditResort/>,
      },
      // team
      {
        path: "/backoffice/update_team/:id",
        element: <UpdateTeam/>,
      },
      {
        path: "/backoffice/edit_team",
        element: <EditTeam/>,
      },

      // blog
      {
        path: "/backoffice/update_blog/:id",
        element: <UpdateArticle/>,
      },
      {
        path: "/backoffice/create_blog",
        element: <CreateArticle/>,
      },
      {
        path: "/backoffice/edit_blog",
        element: <EditArticles/>,
      },
    ],
  },

]);

export default router;
