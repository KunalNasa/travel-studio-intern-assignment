import Separator from "./Separator";

export default function Header() {
  return (
      <div className="mb-3 py-3 w-full">
        <h1 className="text-lg px-4 font-semibold text-gray-700">
          Request Logs
        </h1>
        <p className="text-sm px-4">Place to view all logs recorded in database through n8n</p>
        <Separator/>
      </div>
  );
}