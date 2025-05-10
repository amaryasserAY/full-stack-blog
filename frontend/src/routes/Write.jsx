import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p> <image src="${img.url}" /></p>`);
  }, [img]);
  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p> <iframe class="ql-video src="${video.url}" /></p>`
      );
  }, [video]);

  const { getToken } = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: { Authorization: "Bearer " + token },
      });
    },

    onSuccess: (res) => {
      toast.success("Post has been Created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div>loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>You must be signed in...</div>;
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target);

    const data = {
      img: cover.path || "",
      title: formDate.get("title"),
      category: formDate.get("category"),
      desc: formDate.get("desc"),
      content: value,
    };
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a new Post</h1>
      <form onSubmit={handelSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-lg rounded-xl text-sm bg-white text-gray-500 ">
            Add a cover image
          </button>
        </Upload>
        <input
          type="text"
          className="text-4xl font-semibold outline-none bg-transparent"
          placeholder="My Awesome Post"
          name="title"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm ">
            Choose a category
          </label>
          <select
            name="category"
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

        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              ⏸️
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>

          <ReactQuill
            theme="snow"
            className="flex-1 rounded-lg bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium p-4 rounded-xl mt-4 w-36 disabled:bg:blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : " Send"}
        </button>
        {"Progress:" + progress + "%"}
        {mutation.isError && <span> {mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;
