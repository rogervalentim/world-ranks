import worldRank from "./assets/hero-image-wr.jpg";
import logo from "./assets/Logo.svg";
import searchIcon from "./assets/Search.svg";
import expandDown from "./assets/Expand_down.svg";
import { useEffect, useState } from "react";
import { Button } from "./components/button";

interface CountryData {
  flags: {
    alt: string;
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  area: number;
  region: string;
}

export function App() {
  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <section className="relative">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <img
              className="w-full object-cover lg:object-contain"
              src={worldRank}
              alt="hero image"
            />
            <div className="absolute">
              <img className="h-52 w-52" src={logo} alt="logo image" />
            </div>
          </div>
          {/* table-content */}
          <div className="flex items-center justify-center lg:-mt-20 lg:px-10">
            {" "}
            <div className="w-full border border-[#282B30] bg-[#1B1D1F] px-5 lg:rounded-lg">
              <div className="flex items-center justify-between pt-5">
                <p className="font-medium text-[#6C727F]">Found</p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by Name, Region, Subregion"
                    className="w-80 rounded-lg bg-[#282B30] py-3 pl-10 text-sm"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <img
                      className="h-5 w-5"
                      src={searchIcon}
                      alt="search icon"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-8">
                <div>
                  <form className="flex flex-col gap-2 py-1">
                    <label className="text-xs font-medium text-[#6C727F]">
                      Sort by
                    </label>
                    <div className="relative w-56">
                      <select
                        className="w-full appearance-none rounded-lg border border-[#282B30] bg-transparent px-2 py-2 text-sm text-[#D2D5DA]"
                        name=""
                        id=""
                      >
                        <option value="" className="bg-[#1B1D1F]">
                          Population
                        </option>
                        <option value="" className="bg-[#1B1D1F]">
                          {" "}
                          name alphabetical order
                        </option>
                        <option value="" className="bg-[#1B1D1F]">
                          {" "}
                          area (km²)
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D2D5DA]">
                        <img src={expandDown} alt="expand down" />
                      </div>
                    </div>
                  </form>

                  <div className="pt-6">
                    <p className="text-xs font-medium text-[#6C727F]">Region</p>

                    <div className="flex gap-3 pt-2">
                      <Button continent="Americas" />
                      <Button continent="Antartic" />
                    </div>

                    <div className="flex gap-3">
                      <Button continent="Africa" />
                      <Button continent="Asia" />
                      <Button continent="Europe" />
                    </div>
                    <Button continent="Oceania" />
                  </div>

                  <div className="pt-6">
                    <p className="text-xs font-medium text-[#6C727F]">Status</p>

                    <form className="space-y-3 pt-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="before:shadow-checkbox checked:focus:before:shadow-checkbox h-5 w-5 appearance-none rounded border-[0.125rem] border-solid border-[#6C727F] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                        />
                        <label className="text-xs text-[#D2D5DA]">
                          Member of the United Nations
                        </label>
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="before:shadow-checkbox checked:focus:before:shadow-checkbox h-5 w-5 appearance-none rounded border-[0.125rem] border-solid border-[#6C727F] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                        />
                        <label className="text-xs text-[#D2D5DA]">
                          Independent
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                <table className="w-full text-left">
                  <thead className="border-b-2 border-[#282B30]">
                    <tr className="text-xs font-medium text-[#6C727F]">
                      <th className="py-3">Flag</th>
                      <th className="py-3">Name</th>
                      <th className="py-3">Population</th>
                      <th className="py-3">Area{`(km²)`}</th>
                      <th className="py-3">Region</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.flags.alt} className="text-[#D2D5DA]">
                        <td className="py-3">
                          <img
                            className="h-8 w-10 rounded"
                            src={item.flags.png}
                            alt={item.flags.alt}
                          />
                        </td>
                        <td className="py-3">{item.name.common}</td>
                        <td className="py-3">{item.population}</td>
                        <td className="py-3">{item.area}</td>
                        <td className="py-3">{item.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
