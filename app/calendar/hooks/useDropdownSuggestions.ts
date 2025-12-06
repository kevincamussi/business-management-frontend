import { useState, useMemo, useEffect } from "react";

export const useDropdownSuggestions = (
  allOptions: string[],
  inputValue: string
) => {
  const [isOpen, setIsOpen] = useState(false);

  const filtered = useMemo(() => {
    const text = inputValue.trim().toLowerCase();
    if (!text) return [];

    return allOptions.filter((opt) => opt.toLowerCase().includes(text));
  }, [inputValue, allOptions]);

  useEffect(() => {
    setIsOpen(filtered.length > 0);
  }, [filtered]);

  return { isOpen, filtered, setIsOpen };
};
