'use client'
import GenericLoader from "@/components/GenericLoader";
import Header from "@/components/Header";
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
      <Header/>
      <RequestDetails data={actualData} />
    </div>
  );
}
