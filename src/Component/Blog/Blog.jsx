
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleBookmark, markAsReadHandle }) => {
    // console.log(handleBookmark);
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="space-y-5 mb-16">
            <img className="rounded-lg w-full" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex ">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-gray-400">{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookmark(blog)} ><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="">{
                hashtags.map((hashtag, idx) => <span key={idx} className="mr-2" >#{hashtag}</span>)
            }</p>
            <button onClick={() => markAsReadHandle(blog)} className="underline" href="">Mark as read</button>
        </div>
    );
};

export default Blog;