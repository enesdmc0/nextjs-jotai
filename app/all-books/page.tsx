"use client";
import { useAtomValue, useSetAtom } from "jotai";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { tableDataAtom, tableDataFetchAtom } from "./atom";
import { useEffect } from "react";

const AllBooks = () => {
  const fetchData = useSetAtom(tableDataFetchAtom);
  const data = useAtomValue(tableDataAtom);

  useEffect(() => {
    console.log("fetching data");
    fetchData();
  }, []);
  console.log(data, "data");
  return (
    <div className="bg-[#171717] min-h-screen text-white">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AllBooks;
