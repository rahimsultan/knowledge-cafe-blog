import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"
import Bookmark from "../Bookmark/Bookmark"

const Blogs = () => {
  // for blog post
  const [blogs, setBlogs]= useState([])
  // for read time
  const [readTime, setReadTime] = useState(0)
  // for bookmarks
  const [bookmarks, setBookmarks] = useState([])

  useEffect(()=>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  // handle read time
  const handleMarkasRead = (time, id)=>{
    setReadTime(readTime + time)

    // remove item after click mark as read
    const complete = bookmarks.filter(bookmark=>bookmark.id !== id)
    setBookmarks(complete)
  }

  // handle bookmark
  const handleBookmark = (post)=>{
    setBookmarks([...bookmarks, post]);
  }

  return (
    <>
        <div className="flex my-5 max-w-6xl mx-auto px-3 gap-3">
            <div className="max-w-[65%]">
              {
                blogs.map((blog, i)=> <Blog key={i} post={blog} handleBookmark={handleBookmark} handleMarkasRead={handleMarkasRead}/>)
              }
            </div>
            <Bookmark readtime={readTime} bookmarks={bookmarks}/>
        </div>
    </>
  )
}

export default Blogs