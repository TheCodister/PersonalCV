import { Link } from "react-router-dom";
const BlogList = ({blogs, handleDelete}) => {
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => ( //using map to print out the array
                    <div className="home-content" key={blog.id}>
                        <div className="home-content-title">
                            <h2>{blog.title}</h2>
                        </div>
                        <div className="home-content-body">
                            <p>{blog.body}</p>
                        </div>
                            
                        <Link to={blog.address}><p1>{blog.link}</p1></Link>
                    </div>
                ))}
        </div>
    );
}
 
export default BlogList;