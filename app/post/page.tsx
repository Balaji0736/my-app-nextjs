import { getPost,Post } from "../lib/getPost";



const PostPage = async() => {
    const result:Post = await getPost();

    return(
<>
{result.id}
{result.title}

{result.body}

</>
    )
}

export default PostPage;