'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, Table } from "lucide-react";
interface sideLinks {
  icon?: React.ReactNode,
  title: string,
  href: string,
}
export default function Sidebar() {
  const links: sideLinks[] = [
    {
      title: "Logs",
      href: '/',
      icon: <Table />
    }
  ]
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={`h-screen hidden lg:flex lg:flex-col py-5 p-1 border-r-1 border-gray-800 overflow-hidden  transition-all duration-300 ${
      isOpen ? "w-[210px]" : "w-[70px]"
      }`}
    >
      <button className={`w-full transition-all duration-300 p-2 flex ${isOpen ? 'justify-end' : 'justify-center text-xl'}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 
          (
          <div className="flex items-center w-full">
            <h1 className="text-lg font-semibold pl-2">GydeXP</h1>
            <span className="text-sm"><ChevronRight /></span>
     
          </div>
          ) : <Menu/>
        }
      </button>
      <Tabs isOpen={isOpen} links={links}/>
    </div>
  );
}



function Tabs({ links, isOpen }: { links: Array<sideLinks>, isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {links.map((link) => {
        const isActive = pathname.endsWith(link.href)

        return (
          <Link
            key={link.title}
            href={link.href}
            className={`py-1 px-2 m-1 rounded-md flex gap-2 items-center
              hover:bg-yellow-100]
              ${isActive ? 'bg-darker' : ''}
              ${!isOpen ? 'justify-center' : ''}`}
          >
            <span className={`${!isOpen && 'text-xl'}`}>{link.icon}</span>
            {isOpen && link.title}
          </Link>
        )
      })}
    </div>
  )
}