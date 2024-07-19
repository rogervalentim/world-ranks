import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { CountryDetails } from "./pages/country-details";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/country-details/:countryName"
          element={<CountryDetails />}
        />
      </Routes>
    </>
  );
}
