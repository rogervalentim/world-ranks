import { CountryData } from "../types";

export function Table({ sortedData }: { sortedData: CountryData[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-[#282B30]">
        <thead className="bg-[#1B1D1F]">
          <tr>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-xs font-semibold text-[#6C727F]"
            >
              Country
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-xs font-semibold text-[#6C727F]"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-xs font-semibold text-[#6C727F]"
            >
              Population
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-xs font-semibold text-[#6C727F]"
            >
              Area (km²)
            </th>
            <th
              scope="col"
              className="hidden px-4 py-3.5 text-left text-xs font-semibold text-[#6C727F] lg:flex"
            >
              Region
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((country) => (
            <tr key={country.name.common}>
              <td className="px-4 py-4 text-sm text-[#D2D5DA]">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="mr-2 inline-block h-8 w-10 rounded"
                />
              </td>
              <td className="px-4 py-4 text-sm text-[#D2D5DA]">
                {country.name.common}
              </td>
              <td className="px-4 py-4 text-sm text-[#D2D5DA]">
                {country.population.toLocaleString()}
              </td>
              <td className="px-4 py-4 text-sm text-[#D2D5DA]">
                {country.area.toLocaleString()}
              </td>
              <td className="hidden px-4 py-4 text-sm text-[#D2D5DA] lg:flex">
                {country.region}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
