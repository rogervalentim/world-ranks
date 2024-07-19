import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CountryDetails } from "./pages/CountryDetails";

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
