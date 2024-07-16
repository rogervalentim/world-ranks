import { CountryData } from "../types";

interface TableProps {
  sortedData: CountryData[];
  loading: boolean;
}

interface SkeletonProps {
  className: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={className} />;
};

export function Table({ sortedData, loading }: TableProps) {
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
              className="hidden px-4 py-3.5 text-left text-xs font-semibold text-[#6C727F] lg:block"
            >
              Region
            </th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(10)].map((_, index) => (
                <tr key={index}>
                  <td className="px-4 py-4">
                    <Skeleton className="h-8 w-10 animate-pulse rounded bg-[#6C727F]" />
                  </td>
                  <td className="px-4 py-4">
                    <Skeleton className="h-3 w-28 animate-pulse rounded-lg bg-[#6C727F]" />
                  </td>
                  <td className="px-4 py-4">
                    <Skeleton className="h-3 w-28 animate-pulse rounded-lg bg-[#6C727F]" />
                  </td>
                  <td className="px-4 py-4">
                    <Skeleton className="h-3 w-28 animate-pulse rounded-lg bg-[#6C727F]" />
                  </td>
                  <td className="px-4 py-4">
                    <Skeleton className="hidden h-3 w-28 animate-pulse rounded-lg bg-[#6C727F] lg:block" />
                  </td>
                </tr>
              ))
            : sortedData.map((country) => (
                <tr key={country.name.common}>
                  <td className="px-4 py-4 text-sm text-[#D2D5DA]">
                    <img
                      src={country.flags.png}
                      alt={country.flags.alt}
                      className="mr-2 inline-block h-8 w-10 rounded"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-[rgb(210,213,218)]">
                    {country.name.common}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#D2D5DA]">
                    {country.population.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#D2D5DA]">
                    {country.area.toLocaleString()}
                  </td>
                  <td className="hidden px-4 py-5 text-sm text-[#D2D5DA] lg:block">
                    {country.region}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
