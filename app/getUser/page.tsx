type User = {
    id:number;
    name:string;
    email:string;
    phone:string;
}

const getUser = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const result:User = await res.json();

    console.log(result);


    return(
        <>
         <p>Id: {result.id}</p>
      <p>Name: {result.name}</p>
      <p>Email: {result.email}</p>
      <p>Phone: {result.phone}</p>
        </>
    )
}

export default getUser;