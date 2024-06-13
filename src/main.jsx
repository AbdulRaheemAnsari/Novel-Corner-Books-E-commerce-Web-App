import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from "./Components/Layout.jsx";
import HomePage from "./Components/HomePageComponents/HomePage.jsx";
import NewArrivalsProductsPage from "./Components/NewArrivalProPage/NewArrivalsProductsPage.jsx";
import BestSellingProductsPage from "./Components/BestSellingProPage/BestSellingProPage.jsx"
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage.jsx";
import ContactUsPage from "./Components/ContactUs/ContactUsPage.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import ArrivalContextProvider from "./Components/Context/NewArrivalsContext.jsx";
import BookBazarProductsPage from "./Components/BookBazarPage/BookBazarProductsPage.jsx"
import RecentAddedProductsPage from "./Components/RecentAddedPage/RecentAddedProductsPage.jsx";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay.jsx";
import FictionProductPage from "./Components/FictionProductPage/FictionProductPage.jsx";
import NotesBooksProductsPage from "./Components/NotesBookProductsPage/NotesBooksProductsPage.jsx";
import CartItempage from "./Components/CartItemPage/CartItempage.jsx";
import OrderNowPage from "./Components/OrderNowPage/OrderNowPage.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from "./Components/Profile/Profile.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="NewArrivalsProductsPage" element={<NewArrivalsProductsPage categories="NewArrivals" />} />
      <Route path="BestSellingProductsPage" element={<BestSellingProductsPage categories="BestSelling" />} />
      <Route path="BookBazarProductsPage" element={<BookBazarProductsPage categories="BookBazar" />} />
      <Route path="RecentAddedProductsPage" element={<RecentAddedProductsPage categories="Recentadded" />} />
      <Route path="AboutUsPage" element={<AboutUsPage />} />
      <Route path="ContactUsPage" element={<ContactUsPage />} />
      <Route path="LoginPage" element={<LoginPage />} />
      <Route path="/ProductDisplay/:productId" element={<ProductDisplay />} />
      <Route path="/FictionProductPage" element={<FictionProductPage categories="Fiction" />} />
      <Route path="/NotesBooksProductsPage" element={<NotesBooksProductsPage categories="Notebooks" />} />
      <Route path="/CartItempage" element={<CartItempage />} />
      <Route path="/OrderNowPage" element={<OrderNowPage />} />
      <Route path="/Profile" element={<Profile />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-3nlpmsv54d3sn3gh.us.auth0.com"
    clientId="tryHYC2HVTcI7m2FdC8fVUkkBPdjJGY4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ArrivalContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ArrivalContextProvider>
  </Auth0Provider>
);
