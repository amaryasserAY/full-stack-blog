import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, SetOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        className="md:hidden m-4 bg-blue-800 text-white p-4 rounded-lg"
        onClick={() => SetOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row ">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
