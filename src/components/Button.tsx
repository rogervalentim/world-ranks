interface ButtonProps {
  continent: string;
  onClick: () => void;
  selected: boolean;
}

export function Button({ continent, selected, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`pl- rounded-xl px-1 py-2 text-xs font-medium ${selected ? "bg-[#282B30] text-[#D2D5DA]" : ""} text-[#6C727F] hover:bg-[#282B30] hover:text-[#D2D5DA] lg:px-3`}
    >
      {continent}
    </button>
  );
}
