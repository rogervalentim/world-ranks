import searchIcon from "../assets/Search.svg";
import { CountryData } from "../types";

interface SearchProps {
  filteredData: CountryData[];
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Search({
  filteredData,
  searchTerm,
  handleSearch,
}: SearchProps) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-[#1B1D1F] pt-5">
      <p className="text-sm font-medium text-[#6C727F] lg:text-base">
        Found {filteredData.length} countries
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by Name, Region, Subregion"
          className="w-full rounded-lg bg-[#282B30] py-3 pl-10 text-sm text-[#D2D5DA] outline-none lg:w-80"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <img className="h-5 w-5" src={searchIcon} alt="search icon" />
        </div>
      </div>
    </div>
  );
}
