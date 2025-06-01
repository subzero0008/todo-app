import type { FilterType } from "../types";

interface FilterButtonsProps {
  currentFilter: FilterType;                    // Currently selected filter type ("all", "active", or "completed")
  onFilterChange: (filter: FilterType) => void; // Callback to change the filter when a button is clicked
}

export default function FilterButtons({
  currentFilter,
  onFilterChange,
}: FilterButtonsProps) {
  // Define the possible filter options
  const filters: FilterType[] = ["all", "active", "completed"];

  return (
    // Container for filter buttons with flex layout and spacing
    <div className="flex justify-between gap-2 mb-4 filter-buttons">
      {/* Map through each filter option and render a button */}
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}  // Change filter on click
          className={`flex-1 py-3 rounded-xl transition-all font-medium ${
            // Apply different styles for active vs inactive buttons
            currentFilter === filter
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
              : 'bg-white/10 text-white/60 hover:bg-white/15'
          }`}
        >
          {/* Capitalize the first letter of the filter name */}
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
