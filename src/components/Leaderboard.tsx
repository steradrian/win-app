"use client";

import { leaderboardText, tournamentsText } from "@componentes/utils/text";
import React, { useCallback, useEffect, useState } from "react";
import LeaderboardFilter, {
  LeaderboardFilterValues,
} from "./LeaderboardFilter";
import { leaderboardData } from "@componentes/utils/constants";
import Table, { TableData } from "./core/Table";
import { getFormattedKeys } from "@componentes/utils/utils";
import Image from "next/image";
import FTWCoin from "../assets/ftw-currency.png";
import ButtonControl from "./core/ButtonControl";

const Leaderboard = () => {
  const [selectedFilter, setSelectedFilter] = useState<LeaderboardFilterValues>(
    LeaderboardFilterValues.LATEST_WINS
  );
  const [data, setData] = useState<TableData>(leaderboardData.latestWins);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [showMore, setShowMore] = useState<boolean>(true);
  const [fadeIn, setFadeIn] = useState(false);

  const WinAppIcon = () => <Image src={FTWCoin} alt="Win App Logo" />;

  const handleSetData = useCallback(
    (filter: LeaderboardFilterValues) => {
      setSelectedFilter(filter);
      setShowMore(true);
      setData(
        filter === LeaderboardFilterValues.LATEST_WINS
          ? leaderboardData.latestWins
          : leaderboardData.bigWins
      );
    },
    [setSelectedFilter, setData, setShowMore]
  );
  const handleLoadMore = useCallback(() => {
    setShowMore((prevState) => !prevState);
    setData((prevState) => [...prevState, ...prevState]);
  }, [setData]);
  const handleShowLess = useCallback(() => {
    setShowMore((prevState) => !prevState);
    setData(
      selectedFilter === LeaderboardFilterValues.LATEST_WINS
        ? leaderboardData.latestWins
        : leaderboardData.bigWins
    );
  }, [selectedFilter, setShowMore, setData]);

  useEffect(() => {
    // Trigger fade-in animation when data changes
    setFadeIn(true);

    const timer = setTimeout(() => {
      setFadeIn(false);
    }, 300); // Match this with your animation duration

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    setTableHeaders(getFormattedKeys(data));
  }, [data]);

  return (
    <section className="mb-[2rem]">
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-textDefault text-[1.5rem] leading-[2rem]">
            {leaderboardText.title}
          </h2>
        </div>
        <LeaderboardFilter
          selectedFilter={selectedFilter}
          onFilterChange={handleSetData}
        />
      </div>
      <Table
        data={data}
        headers={tableHeaders}
        columnsWithIcon={[2, 4]}
        Icon={WinAppIcon}
      />
      <div className="flex items-center justify-start md:justify-center mt-6">
        {showMore ? (
          <ButtonControl
            text={leaderboardText.loadMore}
            variant="secondary"
            size="medium"
            fadeIn
            onClick={handleLoadMore}
          />
        ) : (
          <ButtonControl
            text={leaderboardText.showLess}
            variant="secondary"
            size="medium"
            fadeIn
            onClick={handleShowLess}
          />
        )}
      </div>
    </section>
  );
};

export default Leaderboard;
