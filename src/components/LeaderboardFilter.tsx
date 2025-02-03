import { leaderboardText } from "@componentes/utils/text";
import React from "react";

export enum LeaderboardFilterValues {
  LATEST_WINS,
  BIG_WINS,
}

interface LeaderboardFilterProps {
  selectedFilter: LeaderboardFilterValues;
  onFilterChange: (filter: LeaderboardFilterValues) => void;
}

const LeaderboardFilter: React.FC<LeaderboardFilterProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex rounded-full bg-lighter gap-4 p-1">
      <label className="flex items-center">
        <input
          type="radio"
          value={LeaderboardFilterValues.LATEST_WINS}
          checked={selectedFilter === LeaderboardFilterValues.LATEST_WINS}
          onChange={() => onFilterChange(LeaderboardFilterValues.LATEST_WINS)}
          className="hidden"
        />
        <span
          className={`py-[0.375rem] px-2 cursor-pointer text-[0.875rem] font-semibold leading-5 transition-colors duration-300 ease-in-out ${
            selectedFilter === LeaderboardFilterValues.LATEST_WINS
              ? "bg-lightest text-textDefault rounded-full"
              : "bg-lighter text-textSubdued"
          }`}
        >
          {leaderboardText.filters.latestWins}
        </span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          value={LeaderboardFilterValues.BIG_WINS}
          checked={selectedFilter === LeaderboardFilterValues.BIG_WINS}
          onChange={() => onFilterChange(LeaderboardFilterValues.BIG_WINS)}
          className="hidden"
        />
        <span
          className={`py-[0.375rem] px-2 cursor-pointer text-[0.875rem] font-semibold leading-5 transition-colors duration-300 ease-in-out ${
            selectedFilter === LeaderboardFilterValues.BIG_WINS
              ? "bg-lightest text-textDefault rounded-full"
              : "bg-lighter text-textSubdued"
          }`}
        >
          {leaderboardText.filters.bigWins}
        </span>
      </label>
    </div>
  );
};

export default LeaderboardFilter;
