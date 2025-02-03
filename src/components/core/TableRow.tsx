import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { NesteTableValue } from "./Table";

interface TableRowProps {
  item: Record<string, string | NesteTableValue>;
  columnsWithIcon?: number[];
  Icon?: () => React.JSX.Element;
}

const TableRow = ({ item, columnsWithIcon, Icon }: TableRowProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  const hasIcon = useCallback(
    (cellIndex: number) => {
      return columnsWithIcon && columnsWithIcon.includes(cellIndex);
    },
    [columnsWithIcon]
  );

  useEffect(() => {
    // Trigger fade-in animation when data changes
    setFadeIn(true);

    const timer = setTimeout(() => {
      setFadeIn(false);
    }, 300); // Match this with your animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <tr>
        {Object.entries(item).map(([key, value], cellIndex) => (
          <td
            key={`row-${key}`}
            className={`py-2 px-3 bg-[rgba(255,255,255,0.04)] text-[0.75rem] leading-3 whitespace-nowrap ${
              cellIndex === 0 ? "rounded-l-xl" : "" // Left border radius for the first cell
            } ${
              cellIndex === Object.keys(item).length - 1 ? "rounded-r-xl" : "" // Right border radius for the last cell
            } `}
          >
            {/* Render value based on its type */}
            {typeof value === "string" ? (
              <span
                className={`flex items-center gap-1 ${
                  fadeIn ? "animate-fade-in" : ""
                }`}
              >
                {value} {Icon && hasIcon(cellIndex) && <Icon />}
              </span>
            ) : (
              <div
                className={`flex items-center gap-2 ${
                  fadeIn ? "animate-fade-in" : ""
                }`}
              >
                <Image
                  src={value.avatar}
                  alt={value.title}
                  className="w-8 h-8 rounded-full"
                />
                <div className={`flex flex-col gap-1 `}>
                  <span>{value.title}</span>
                  <span className="text-textSubdued">{value.subtitle}</span>
                </div>
              </div>
            )}
          </td>
        ))}
      </tr>
      <tr className="h-1"></tr>
    </>
  );
};

export default TableRow;
