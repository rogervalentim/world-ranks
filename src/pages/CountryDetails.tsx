import { useParams } from "react-router-dom";
import { Hero } from "../components";
import { CountryData } from "../types";
import { useEffect, useState } from "react";

export function CountryDetails() {
  const { countryName } = useParams();
  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [neighbors, setNeighbors] = useState<CountryData[]>([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];
        setCountry(countryData);

        if (countryData.borders) {
          const neighborPromises = countryData.borders.map((code: string) =>
            fetch(`https://restcountries.com/v3.1/alpha/${code}`)
              .then((response) => response.json())
              .then((data) => data[0]),
          );

          Promise.all(neighborPromises).then((neighbors) => {
            setNeighbors(neighbors);
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching country details:", error);
        setLoading(false);
      });
  }, [countryName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <section className="relative">
      <div className="flex flex-col gap-6">
        <Hero />

        <div className="-mt-16 flex items-center justify-center pb-24 lg:-mt-20 lg:px-72">
          <div className="lg:max-h-auto w-full overflow-y-auto bg-[#1B1D1F] pb-10 lg:rounded-lg lg:border lg:border-[#282B30] [&::-webkit-scrollbar]:hidden">
            <div className="flex justify-center">
              <div className="absolute -mt-12">
                <img
                  className="h-48 w-64 rounded-xl"
                  src={country.flags.png}
                  alt={country.flags.alt}
                />
              </div>
            </div>
            <div className="flex flex-col pt-48">
              <div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-[#D2D5DA]">
                    {country.name.common}
                  </h1>
                  <p className="text-[#D2D5DA]">Region: {country.region}</p>
                </div>
              </div>
              <div className="flex justify-center gap-3 px-4 pt-4 lg:gap-10">
                <div className="flex items-center gap-3 rounded-xl bg-[#282B30] px-2 py-2 lg:px-4">
                  <p className="text-sm text-[#D2D5DA]">Population</p>

                  <div className="h-8 w-[1px] bg-[#1B1D1F]" />
                  <p className="text-sm text-[#D2D5DA]">{country.population}</p>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-[#282B30] px-2 py-2 lg:px-4">
                  <p className="text-xs text-[#D2D5DA] lg:text-sm">
                    {" "}
                    Area {`(km²)`}
                  </p>

                  <div className="h-8 w-[1px] bg-[#1B1D1F]" />
                  <p className="text-sm text-[#D2D5DA]"> {country.area}</p>
                </div>
              </div>

              <div className="w-full pt-6">
                <div className="flex items-center justify-between border-y border-[#282B30] p-4">
                  <p className="text-sm text-[#6C727F]">Capital</p>
                  <p className="text-sm text-[#D2D5DA]">{country.region}</p>
                </div>
                <div className="flex items-center justify-between border-b border-[#282B30] p-4">
                  <p className="text-sm text-[#6C727F]">Subregion</p>
                  <p className="text-sm text-[#D2D5DA]">{country.subregion}</p>
                </div>
                <div className="flex items-center justify-between border-b border-[#282B30] p-4">
                  <p className="text-sm text-[#6C727F]">Languages</p>
                  <p className="text-sm text-[#D2D5DA]">
                    {Object.values(country.languages).join(", ")}
                  </p>
                </div>

                <div className="flex items-center justify-between border-b border-[#282B30] p-4">
                  <p className="text-sm text-[#6C727F]">Currencies</p>
                  <p className="text-sm text-[#D2D5DA]">
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </p>
                </div>

                <div className="flex items-center justify-between border-b border-[#282B30] p-4">
                  <p className="text-sm text-[#6C727F]">Continents</p>
                  <p className="text-sm text-[#D2D5DA]">
                    {country.continents.map((item) => item)}
                  </p>
                </div>
              </div>

              {neighbors.length > 0 && (
                <div className="w-full px-4 pb-3 pt-6">
                  <p className="text-sm text-[#6C727F]">
                    Neighbouring Countries{" "}
                  </p>
                  <div className="flex flex-wrap gap-5 pt-4">
                    {neighbors.map((neighbor) => (
                      <div
                        key={neighbor.cca3}
                        className="flex flex-col rounded-lg"
                      >
                        <img
                          className="h-16 w-20 rounded-md"
                          src={neighbor.flags.png}
                          alt={neighbor.flags.alt}
                        />
                        <p className="mt-2 text-sm font-medium text-[#D2D5DA]">
                          {neighbor.name.common}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
