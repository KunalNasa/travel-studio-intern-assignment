"use client";

import { Calendar, Phone, MessageSquareText, Hash, Hourglass } from "lucide-react";

type RequestData = {
  id: number;
  guestPhone: string;
  requestText: string;
  createdAt: string;
  status: string;
};

interface Props {
  data: RequestData[];
}

export default function RequestTable({ data }: Props) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4" />
                ID
              </div>
            </th>
            <th className="px-4 py-3 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Guest Phone
              </div>
            </th>
            <th className="px-4 py-3 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <MessageSquareText className="w-4 h-4" />
                Message
              </div>
            </th>
            <th className="px-4 py-3 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Created At
              </div>
            </th>
            <th className="px-4 py-3 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <Hourglass className="w-4 h-4" />
                Status
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length === 0 ? <p className="w-full p-5 text-lg text-gray-700 font-semibold">No Data to display yet!!</p> :data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.guestPhone}</td>
              <td className="px-4 py-2">{item.requestText}</td>
              <td className="px-4 py-2">
                {new Date(item.createdAt).toLocaleString()}
              </td>
              <td className="px-4 py-2 capitalize text-sm font-medium">
                {/* if in future we add some more status */}
                <span
                  className={`px-2 py-1 rounded-full ${
                    item.status.trim() === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : item.status.trim() === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status.trim()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
