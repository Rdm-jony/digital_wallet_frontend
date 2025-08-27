import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-50 to-red-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to view this page.  
          Please check your account permissions or go back to the home page.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
