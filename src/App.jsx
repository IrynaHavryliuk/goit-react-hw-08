import "./App.css";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout/Layout";

function App() {
  const isRefreshing = useSelector(selectRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h3 className="load">Loading...</h3>
  ) : (
    <div>
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<Registration />}
                  redirectTo="/contacts"
                ></RestrictedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<Contacts />}
                  redirectTo="/login"
                ></PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Layout>

      {/* <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong! Please try again.</p>}
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}

export default App;

// Для обгортки компонентів публічних і приватних сторінок використовуйте компоненти PrivateRoute та RestrictedRoute.

// / - маршрут домашньої сторінки додатка, де можна розмістити інформацію про додаток чи його розробника. Рендерить компонент Home.
// /register - публічний маршрут для реєстрації нового користувача, на якому рендериться компонент сторінки Registration з формою RegistrationForm.
// /login - публічний маршрут для логіна існуючого користувача, на якому рендериться компонент сторінки Login з формою LoginForm.
// /contacts - приватний маршрут для роботи зі списком контактів користувача, на якому рендериться компонент сторінки Contacts.