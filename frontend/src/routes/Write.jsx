import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You must be signed in...</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a new Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-lg rounded-xl text-sm bg-white text-gray-500 ">
          Add a cover image
        </button>
        <input
          type="text"
          className="text-4xl font-semibold outline-none bg-transparent"
          placeholder="My Awesome Post"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm ">
            Choose a category
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="search-engines">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          placeholder="A Short Description"
          name="desc"
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-lg bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium p-4 rounded-xl mt-4 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
