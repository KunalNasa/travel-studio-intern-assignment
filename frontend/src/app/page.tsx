'use client'
import GenericLoader from "@/components/GenericLoader";
import RequestDetails from "@/components/RequestTable";
import Separator from "@/components/Separator";
import { useRequestLogs } from "@/controller/request.controller";


export default function Home() {

  const { data, isLoading, error } = useRequestLogs();
  const actualData = data?.data;

  if (isLoading) return <GenericLoader/>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="w-full min-h-screen bg-white rounded-l-2xl">
      <div className="mb-3 py-3">
        <h1 className="text-lg px-4 font-semibold text-gray-700">
          Request Logs
        </h1>
        <p className="text-sm px-4">Place to view all logs recorded in database through n8n</p>
      <Separator/>
      </div>
      <RequestDetails data={actualData} />
    </div>
  );
}
