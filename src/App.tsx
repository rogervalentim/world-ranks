import { useCallback, useEffect, useState } from "react";
import { Hero } from "./components/hero";
import { CountryData } from "./types";
import { Search } from "./components/search";
import { CountryFilter } from "./components/country-filter";
import { Table } from "./components/table";

export function App() {
  const [data, setData] = useState<CountryData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("population");
  const [regionFilter, setRegionFilter] = useState<string[]>([]);
  const [unMember, setUnMember] = useState(false);
  const [independent, setIndependent] = useState(false);

  const fetchData = useCallback(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        let filteredData = data;

        if (regionFilter.length > 0) {
          filteredData = filteredData.filter((country: CountryData) =>
            regionFilter.includes(country.region),
          );
        }

        if (unMember) {
          filteredData = filteredData.filter(
            (country: CountryData) => country.unMember,
          );
        }

        if (independent) {
          filteredData = filteredData.filter(
            (country: CountryData) => country.independent,
          );
        }

        setData(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [regionFilter, unMember, independent]);

  useEffect(() => {
    fetchData();
  }, [regionFilter, unMember, independent, fetchData]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOption(e.target.value);
  }

  function handleRegionFilter(region: string) {
    setRegionFilter((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region],
    );
  }

  function handleUnMemberFilter() {
    setUnMember(!unMember);
  }

  function handleIndependentFilter() {
    setIndependent(!independent);
  }

  function sortData(data: CountryData[]) {
    switch (sortOption) {
      case "name":
        return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      case "area":
        return data.sort((a, b) => b.area - a.area);
      default:
        return data.sort((a, b) => b.population - a.population);
    }
  }

  const filteredData = data.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.region.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedData = sortData(filteredData);

  function isRegionSelected(region: string) {
    return regionFilter.includes(region);
  }

  return (
    <>
      <section className="relative">
        <div className="flex flex-col gap-6">
          <Hero />

          <div className="-mt-16 flex items-center justify-center pb-24 lg:-mt-20 lg:px-10">
            <div className="w-full overflow-y-auto bg-[#1B1D1F] px-5 lg:max-h-[62.50rem] lg:rounded-lg lg:border lg:border-[#282B30] [&::-webkit-scrollbar]:hidden">
              <Search
                filteredData={filteredData}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
              />

              <div className="flex flex-col gap-6 pt-8 lg:flex-row">
                <CountryFilter
                  sortOption={sortOption}
                  handleSort={handleSort}
                  handleRegionFilter={handleRegionFilter}
                  isRegionSelected={isRegionSelected}
                  unMember={unMember}
                  handleUnMemberFilter={handleUnMemberFilter}
                  independent={independent}
                  handleIndependentFilter={handleIndependentFilter}
                />

                <Table sortedData={sortedData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
