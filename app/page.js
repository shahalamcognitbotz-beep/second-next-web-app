import Link from "next/link"
import ComponentsPage from "./_components/page";

export default async function Home({searchParams,params})
{
  console.log(await searchParams);  
  console.log(await params);
  
    return (
      <div>
        <h1 style={{background:"pink"}}>Technical agency</h1>
        <ComponentsPage/>
        <p><Link href="/blogs">Blogs</Link></p>
        <p><Link href="/about">About</Link></p>
        <p><Link href="/services">Services</Link></p>
        <p><Link href="/files">Files</Link></p>
      </div>
      )
    }