const BlogLayout = ({children}:{children:React.ReactNode}) => {
    return(
<div>
<aside>Blog Categories</aside>
<main>{children}</main>
</div>
    );
}

export default BlogLayout;