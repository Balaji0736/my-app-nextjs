const ProductCard = ({title,price,inStock}:{title:string,price:number,inStock:boolean}) => {
    return(
        <>
        <h2>{title}</h2>
        <p>price: ${price}</p>
        <p>{inStock ? "In Stock" : "Out of Stock" }</p>
        </>
    )
}