import { BASE_URL } from "@/lib/getBaseUrl";
import { useQuery } from "@tanstack/react-query";

// function to fetch data.
const fetchLogs = async () => {
  const res = await fetch(`${BASE_URL}/api/requests`, { cache: 'no-store', next: { revalidate: 0 } });
  if (!res.ok) {
    throw new Error("Failed to fetch request logs");
  }
  return res.json();
};

export function useRequestLogs() {
  // refetch data in every 5 minutes in case user is active but has not refreshed screen and there are new entries in db.
  return useQuery({
    queryKey: ['requestLogs'],
    queryFn: fetchLogs,
    staleTime: 5 * 60 * 1000,
  });
}
