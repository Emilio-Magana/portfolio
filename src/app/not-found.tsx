import Link from "next/link";

export default function _404() {
  return (
    <div className="text-red-300">
      <h1 className="mb-10 text-7xl">_404</h1>
      <h2>
        <Link href="/" className="m-1 rounded-lg border-2 border-socialHov p-1">
          {/* <Redirect to="/"></Redirect> */}
          Click here
        </Link>
        to return to Homepage or{" "}
        <strong className="text-red-600">Click My Name!</strong>
      </h2>
    </div>
  );
}
