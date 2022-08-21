const BlogList = ( {blogs,tit}) => {
    return ( 
        <div className="blog-list">
            <h2>{tit}</h2>
            {blogs.map((blog)=>(
                <div className="blog-prview" key={blog.id}>
                    <h2>Title {blog.title}</h2>
                    <p>Author {blog.author}</p>
                    </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;