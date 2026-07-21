type props = {
    params: Promise<{slug:string}>;
}

type postDetail = {
    id: number,
    userId: number,
    title: string,
    body: string
}

const BlogDetail = async({params}:props) => {

    const {slug} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

    const post: postDetail = await res.json();    

    return(
        <>
        {slug}
        Id: {post.id}
        Title: {post.title}
        Body: {post.body}
        </>
    )
}

export default BlogDetail;