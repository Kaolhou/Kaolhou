import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="max-w-[400px] m-auto h-[80vh] flex flex-col justify-center">
      <div className="mb-3">
        <h2 className="m">Not Found the page</h2>
      </div>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/posts">all posts</Link>
      </p>
    </div>
  );
}
