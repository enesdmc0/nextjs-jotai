"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { fetchBooksAtom, tableDataAtom } from "./atom";
import { useEffect } from "react";

export const BooksPage = () => {
  const fetchBooks = useSetAtom(fetchBooksAtom);
  const books = useAtomValue(tableDataAtom);

  useEffect(() => {
    console.log("Fetching books...");
    fetchBooks();
  }, [fetchBooks]);
  return (
    <div className="bg-[#171717] min-h-screen text-white">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={books} />
      </div>
    </div>
  );
};

export default BooksPage;
