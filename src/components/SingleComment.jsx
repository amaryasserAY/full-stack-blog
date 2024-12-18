import Image from "./Image";

const SingleComment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover "
          w="40"
        />

        <span className="font-medium">john doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ipsam magnam assumenda dignissimos, exercitationem impedit nisi hic
          omnis reprehenderit amet aliquam sapiente doloremque in eligendi iste
          corporis officiis nesciunt. Obcaecati!
        </p>
      </div>
    </div>
  );
};

export default SingleComment;