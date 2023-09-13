import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({ handleBookmark, markAsReadHandle }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3 ">

            {
                blogs.map((blog, idx) => <Blog
                    key={idx}
                    handleBookmark={handleBookmark}
                    markAsReadHandle={markAsReadHandle}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;