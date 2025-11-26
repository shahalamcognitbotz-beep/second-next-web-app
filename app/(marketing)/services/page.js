import Link from "next/link";

export const metadata = {
    title:"Services"
  }

export default function Services()
{
    return (
        <div>
        <h1> All Services</h1>
        <p><Link href="/services/app-dev">app development</Link></p>
        <p><Link href="/services/web-dev">Web development</Link></p>
        <p><Link href="/services/appweb-des">Web/app desg</Link></p>
        <p><Link href="/services/seo">SEO</Link></p>
        </div> 
    )
} 