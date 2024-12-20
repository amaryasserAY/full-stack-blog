import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8 ">
      <h1 className="mb-4 mt-8 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mb-4 mt-8 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          <span> Newest</span>
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="most-popular"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white  border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          <span> Most Popular</span>
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white  border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          <span> Trending</span>
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white  border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          <span> Oldest</span>
        </label>
      </div>

      <h1 className="mb-4 mt-8 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm ">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=search-engine">
          Search Engine
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
