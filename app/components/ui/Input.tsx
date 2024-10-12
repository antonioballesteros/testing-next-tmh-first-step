export default function Input({
  value = "",
  placeholder = "",
  onChange,
}: {
  value?: string;
  placeholder?: string;
  onChange: (updated: string) => void;
}) {
  const updateFilter = (updated: string) => {
    onChange(updated);
  };

  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => updateFilter(e.target.value)}
      className="bg-inherit border-2 border-neutral-700 p-2 rounded-lg"
    />
  );
}
