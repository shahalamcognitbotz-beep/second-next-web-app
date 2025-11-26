import Likes from "@/components/Likes";


export const metadata = {
    title:"Blogs"
  }


export default function blogs()
{
    console.log('blogs page');
    return (
        <div>
        <h1 class='color-red-700'>All blogs</h1>
        <p>blog 1</p>
        <p>blog 2</p>
        <p>blog 3</p>
        <Likes/>
        </div>
    )
}