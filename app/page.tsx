import Link from "next/link";
const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-400">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Explore Posts from External
      </h1>

      <Link
        href="/fetch-posts"
        className="text-blue-500 hover:underline mt-4 block transition-transform duration-1ooo transform hover:scale-125"
      >
        Go to Posts
      </Link>
    </div>
  );
};
export default HomePage;
