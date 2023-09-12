
const Bookmark = ({readtime, bookmarks}) => {
    return (
      <div className=" max-w-[35%]">
        <div className="border-2 border-indigo-500 rounded-xl py-5 px-10 bg-indigo-100">
          <h3 className="text-center text-indigo-600 font-bold text-2xl">Spent time on read: {readtime} min</h3>
        </div>
        <div className="bg-slate-200 py-5 px-7 mt-5 rounded-xl">
          <h3 className="text-2xl font-bold py-4">Bookmarked Blogs : {bookmarks.length}</h3>

          {
            bookmarks.map((bookmark, idx)=>{
              return (
                <div key={idx} className="bg-white rounded-md p-3 text-xl mb-3">
                  <h2>{bookmark.title}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  
  export default Bookmark