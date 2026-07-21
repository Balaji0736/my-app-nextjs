export type Post = {
    id:number;
    title:string;
    body:string;
}

export async function getPost(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post:Post = await res.json();
    return post;
}