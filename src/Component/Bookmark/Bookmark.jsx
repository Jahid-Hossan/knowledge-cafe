import Bokmark from "../Bokmark/Bokmark";


const Bookmark = ({ bookmark, readTime }) => {

    return (
        <div className="w-1/3 space-y-6">
            <h2 className="text-2xl rounded-lg font-bold text-[#6047EC] py-5 px-11 bg-purple-200">Spent time on read : {readTime} min</h2>
            <div className="rounded-lg font-bold  py-5 px-11 bg-slate-200 space-y-5">
                <h2 className="text-2xl  p-5 rounded-lg">Bookmarked Blogs: {bookmark.length}</h2>
                {
                    bookmark.map((item, idx) => <Bokmark key={idx} item={item}></Bokmark>)
                }
            </div>
        </div>
    );
};

export default Bookmark;