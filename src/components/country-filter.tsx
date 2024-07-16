import expandDown from "../assets/Expand_down.svg";
import { Button } from "./index";

interface CountryFilterProps {
  sortOption: string;
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleRegionFilter: (region: string) => void;
  isRegionSelected: (region: string) => boolean;
  unMember: boolean;
  handleUnMemberFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  independent: boolean;
  handleIndependentFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CountryFilter({
  sortOption,
  handleSort,
  handleRegionFilter,
  isRegionSelected,
  unMember,
  handleUnMemberFilter,
  independent,
  handleIndependentFilter,
}: CountryFilterProps) {
  return (
    <div className="sticky top-20 z-10 bg-[#1B1D1F]">
      <form className="flex flex-col gap-2 py-1">
        <label className="text-xs font-medium text-[#6C727F]">Sort by</label>
        <div className="relative w-full lg:w-56">
          <select
            className="w-full appearance-none rounded-lg border border-[#282B30] bg-transparent px-2 py-2 text-sm text-[#D2D5DA]"
            value={sortOption}
            onChange={handleSort}
          >
            <option value="population" className="bg-[#1B1D1F]">
              Population
            </option>
            <option value="name" className="bg-[#1B1D1F]">
              Name (Alphabetical Order)
            </option>
            <option value="area" className="bg-[#1B1D1F]">
              Area (km²)
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D2D5DA]">
            <img src={expandDown} alt="expand down" />
          </div>
        </div>
      </form>

      <div className="pt-6">
        <p className="text-xs font-medium text-[#6C727F]">Region</p>

        <div className="flex items-center gap-2 pt-2 lg:block lg:gap-0">
          <div className="gap-3 lg:flex">
            <Button
              continent="Americas"
              onClick={() => handleRegionFilter("Americas")}
              selected={isRegionSelected("Americas")}
            />
            <Button
              continent="Antarctic"
              onClick={() => handleRegionFilter("Antarctic")}
              selected={isRegionSelected("Antarctic")}
            />
          </div>

          <div className="gap-3 lg:flex">
            <Button
              continent="Africa"
              onClick={() => handleRegionFilter("Africa")}
              selected={isRegionSelected("Africa")}
            />
            <Button
              continent="Asia"
              onClick={() => handleRegionFilter("Asia")}
              selected={isRegionSelected("Asia")}
            />
            <Button
              continent="Europe"
              onClick={() => handleRegionFilter("Europe")}
              selected={isRegionSelected("Europe")}
            />
          </div>
          <Button
            continent="Oceania"
            onClick={() => handleRegionFilter("Oceania")}
            selected={isRegionSelected("Oceania")}
          />
        </div>
      </div>

      <div className="pt-6">
        <p className="text-xs font-medium text-[#6C727F]">Status</p>

        <form className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={unMember}
              onChange={handleUnMemberFilter}
              className="before:shadow-checkbox checked:focus:before:shadow-checkbox h-5 w-5 appearance-none rounded border-[0.125rem] border-solid border-[#6C727F] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 checked:hover:before:opacity-[0.16] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[#2e71ff] checked:focus:before:scale-100 checked:focus:before:opacity-[0.16]"
            />
            <label className="text-sm font-normal text-[#D2D5DA]">
              UN member
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={independent}
              onChange={handleIndependentFilter}
              className="before:shadow-checkbox checked:focus:before:shadow-checkbox h-5 w-5 appearance-none rounded border-[0.125rem] border-solid border-[#6C727F] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 checked:hover:before:opacity-[0.16] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[#2e71ff] checked:focus:before:scale-100 checked:focus:before:opacity-[0.16]"
            />
            <label className="text-sm font-normal text-[#D2D5DA]">
              Independent
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
