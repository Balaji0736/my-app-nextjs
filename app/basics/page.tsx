type User = {
    id: number;
    name:string;
    email:string;
    isActive:boolean;
}

type BlogPost = {
    id: number;
    title: string;
    body: string;
    published: boolean;
    authorId: number;
}

type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
    status: "active" | "inactive";
}

const Basics = () => {

    const user:User ={
        id: 1,
        name: "Balaji",
        email: "balajidgct@gmail.com",
        isActive: true
    }

    const blogPosts:BlogPost[] = [
        {
            id: 1,
            title: "Balaji",
            body: "Software Engineer",
            published: true,
            authorId: 100,
        },
        {
            id: 2,
            title: "Shalini",
            body: "Engineer",
            published: false,
            authorId: 102,
        },
    ]

    const product:Product = {
         id: 1,
    name: "soap",
    price: 48.50,
    status: "active",
    }

    return(
        <>
        <p>{user.id}</p>
        <p>{user.name}</p>
                <p>{user.email}</p>

        <p>{user.isActive && "Active"}</p>

        </>
    )
}

export default Basics;