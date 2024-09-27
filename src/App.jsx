import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home"
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Preloader } from "./components/Preloader";
import { useEffect, useState } from "react";
import AppLayout from './layout/AppLayout';
import { Services } from "./components/Services";
import { contactData } from './components/ContactApi';
import { Reviews } from './components/Reviews';
import ModeData from "./layout/ModeContext";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 1000);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <ModeData><Home/></ModeData>
        },
        {
          path: '/about',
          element: <ModeData><About/></ModeData>
        },
        {
          path: '/services',
          element: <ModeData><Services/></ModeData>
        },
        {
          path: '/contact',
          element: <ModeData><Contact/></ModeData>,
          action: contactData
        },
        {
          path: '/reviews',
          element: <ModeData><Reviews/></ModeData>
        },
      ]
    }
  ]);

  if (loading) return <Preloader />
  return (
    <div className="relative overflow-hidden">
      <ModeData></ModeData>
      <RouterProvider router={router} />
    </div>
  )
}
export default App