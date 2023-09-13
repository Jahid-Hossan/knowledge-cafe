import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs';
import Bookmark from './Component/Bookmark/Bookmark';
// import { bookmark } from 'react-icons/BsBookmark';

function App() {
  // 
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0)
  const handleBookmark = (blog) => {
    const isExist = bookmark.find(element => element.id === blog.id)
    if (isExist) {
      return alert("Bookmark is already added");
    } else {
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
    }

  }
  // mark as read handle 
  const markAsReadHandle = (blog) => {
    const { reading_time, id } = blog;
    const newBookmark = bookmark.filter((x) => x.id !== id)
    setBookmark(newBookmark);
    const newReadingTime = readTime + reading_time;
    setReadTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='flex container mx-auto px-12 gap-6'>
        <Blogs handleBookmark={handleBookmark} markAsReadHandle={markAsReadHandle}></Blogs>
        <Bookmark bookmark={bookmark} readTime={readTime}></Bookmark>
      </div>
    </>
  )
}

export default App
