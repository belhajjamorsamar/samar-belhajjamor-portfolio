"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
    name:"Home",
    path:"/",
    },
    {  
    name:"Services",
    path:"/services",
    },
    {  
    name:"Resume",
    path:"/resume",
    },
    {  
    name:"Work",
    path:"/work",
    },
    {  
    name:"Contact",
    path:"/contact",
    },
];

const Nav = () => {
    const pathname= usePathname();
  return (
    <nav className="flex gap-8">
    {links.map((link,index) =>{
        return(
            <Link
             href={link.path}
             key={index} 
             className={`${link.path === pathname && "text-accent border-b-2 text-sm border-accent"
            } capotalize font-medium hover:text-accent transition-all text-sm`}
            >
             {link.name}
            </Link>
            );
    })}
    </nav>
  );
};

export default Nav
