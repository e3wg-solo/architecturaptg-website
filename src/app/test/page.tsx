export default function TestPage() {
  const testMessage: string = "Next.js App Router with TypeScript is working!";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Test Page</h1>
        <p className="text-gray-600">{testMessage}</p>
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="text-green-800">✅ TypeScript: Working</p>
          <p className="text-green-800">✅ Tailwind CSS: Working</p>
          <p className="text-green-800">✅ App Router: Working</p>
        </div>
      </div>
    </div>
  );
} 