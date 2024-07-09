interface ButtonProps {
  continent: string;
}

export function Button({ continent }: ButtonProps) {
  return (
    <button className="rounded-xl px-3 py-2 text-xs font-medium text-[#6C727F] hover:bg-[#282B30] hover:text-[#D2D5DA]">
      {continent}
    </button>
  );
}
