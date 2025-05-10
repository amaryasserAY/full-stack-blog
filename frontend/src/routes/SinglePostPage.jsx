import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong" + error.message;
  if (!data) return "Post not found";

  return (
    <div className="flex flex-col gap-8 ">
      {/* Details */}
      <div className="flex gap-8">
        <div className="flex lg:w-3/5 flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold ">
            {data.title}
          </h1>
          <div className="flex flex-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>

          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w="600" className="rounded-2xl" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className=" font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem veniam dolore adipisci totam neque sed natus, facilis
            qui tempore delectus rem ducimus soluta eaque asperiores atque
            itaque in fuga laudantium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem veniam dolore adipisci totam neque
            sed natus, facilis qui tempore delectus rem ducimus soluta eaque
            asperiores atque itaque in fuga laudantium.
          </p>
          <p className=" font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem veniam dolore adipisci totam neque sed natus, facilis
            qui tempore delectus rem ducimus soluta eaque asperiores atque
            itaque in fuga laudantium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem veniam dolore adipisci totam neque
            sed natus, facilis qui tempore delectus rem ducimus soluta eaque
            asperiores atque itaque in fuga laudantium.
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem veniam dolore adipisci totam neque sed natus, facilis
            qui tempore delectus rem ducimus soluta eaque asperiores atque
            itaque in fuga laudantium.
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem veniam dolore adipisci totam neque sed natus, facilis
            qui temporeelectus rem ducimus soluta eaque asperiores atque itaque
            in fuga laudantium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem veniam dolore adipisci totam neque
            sed natus, facilis qui tempore delectus rem ducimus soluta eaque
            asperiores atque itaque in fuga laudantium. delectus rem ducimus
            soluta eaque asperiores atque itaque in fuga laudantium.
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem veniam dolore adipisci totam neque sed natus, facilis
            qui tempore delectus rem ducimus soluta eaque asperiores atque
            itaque in fuga laudantium.
          </p>
        </div>

        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  alt="user"
                  className="rounded-full w-12 h-12 object-cover "
                  w="48"
                  h="48"
                />
              )}

              <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-500 ">
              tionem veniam dolore adipisci totam
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engine
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
