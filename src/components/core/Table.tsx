import { StaticImageData } from "next/image";
import React from "react";
import TableRow from "./TableRow";

export type NesteTableValue = {
  title: string;
  subtitle: string;
  avatar: StaticImageData;
};

export type TableData = Array<Record<string, string | NesteTableValue>>;

interface TableProps {
  headers: string[];
  data: TableData;
  theadClass?: string;
  tbodyClass?: string;
  columnsWithIcon?: number[];
  Icon?: () => React.JSX.Element;
}

const BREAKPOINT = 768; // MD breakpoint

const Table = ({
  headers,
  data,
  theadClass,
  tbodyClass,
  columnsWithIcon,
  Icon,
}: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className={theadClass}>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-[0.625rem] px-[0.75rem] text-left text-textSubdued text-[0.75rem] leading-3 font-semibold capitalize whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tbodyClass}>
          {data.map((item, rowIndex) => (
            <TableRow
              key={`tableRow-${rowIndex}`}
              item={item}
              columnsWithIcon={columnsWithIcon}
              Icon={Icon}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
