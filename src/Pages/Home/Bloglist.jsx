import { Link } from "react-router-dom";
const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="home-blog-list">
      {blogs.map(
        (
          blog //using map to print out the array
        ) => (
          <div className="home-content-background">
            <div className="home-content" key={blog.id}>
              <div className="home-content-title">
                <h2>{blog.title}</h2>
                <hr className="home-content-title-line"></hr>
              </div>
              <div className="home-content-body">
                <p>{blog.body}</p>
              </div>
              <div className="home-content-link">
                <Link to={blog.address}>
                  <p>{blog.link}</p>
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BlogList;
