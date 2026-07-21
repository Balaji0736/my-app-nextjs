import Link from "next/link";

type Post = {
    id: number,
    title: string
}

const  Blog = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await res.json();

    
    return(
    <>
    <ul>
        {posts.map((post:Post)=>(
            <li key={post.id}>{post.title} - <Link href={`/blog/${post.id}`}>View Details</Link></li>
        ))}
    </ul>
    </>
    )
}

export default Blog;