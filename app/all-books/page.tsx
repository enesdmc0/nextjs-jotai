import { columns } from "./columns";
import { DataTable } from "./data-table";

const AllBooks = () => {
  return (
    <div className="bg-[#171717] min-h-screen text-white">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={[]} />
      </div>
    </div>
  );
};

export default AllBooks;
