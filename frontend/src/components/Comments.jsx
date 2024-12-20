import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl font-semibold underline text-gray-500">
        Comments
      </h1>

      <div className="flex justify-between items-center gap-8 w-full">
        <textarea
          placeholder="Write a comment"
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 text-white p-4 rounded-xl mt-4">
          Send
        </button>
      </div>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};

export default Comments;
