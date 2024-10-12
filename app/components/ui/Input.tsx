import { useState } from "react";

export default function Input({
  initValue = "",
  placeholder = "",
  onChange,
}: {
  initValue?: string;
  placeholder?: string;
  onChange: (updated: string) => void;
}) {
  const [filter, setFilter] = useState(initValue);

  const updateFilter = (updated: string) => {
    setFilter(updated);
    onChange(updated);
  };

  return (
    <input
      value={filter}
      placeholder={placeholder}
      onChange={(e) => updateFilter(e.target.value)}
      className="bg-inherit border-2 border-neutral-700 p-2 rounded-lg"
    />
  );
}
