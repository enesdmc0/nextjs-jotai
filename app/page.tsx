import Sample1 from "@/components/sample1";
import Sample2 from "@/components/sample2";

const Home = () => {
  return (
    <div className="bg-black h-full text-white space-y-16 p-10">
      <Sample1 />
      <div className="w-full h-px bg-white " />
      <Sample2 />
      <div className="w-full h-px bg-white " />
    </div>
  );
};

export default Home;
