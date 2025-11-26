import { notFound } from "next/navigation";

export const dynamicParams = false;
export const revalidate=6

export function generateStaticParams(){
  return [
    { blogID:"1"},
    { blogID:"2"},
    { blogID:"3"},
    { blogID:"4"},
    { blogID:"5"},
  ]
}

export async function generateMetadata({params}) {
  const {blogID}=await  params
  return {
    title:`Blog ${blogID}`
  }
}

async function Blog1({params}) {
  console.log(await params);
  const {blogID} = await params;
  if(!/^\d+$/.test(blogID)){
    notFound()
  }
  return  <div>Blog 1 {blogID}
  <h2>Date : {new Date().toLocaleString()}</h2>
  </div>
}

export default Blog1