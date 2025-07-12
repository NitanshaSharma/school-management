import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 – Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go back to Dashboard
        </Link>
      </div>
    </div>
  )
}
