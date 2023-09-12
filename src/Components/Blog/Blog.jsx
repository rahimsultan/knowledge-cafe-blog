import { BsBookmarkPlus } from 'react-icons/bs';
const Blog = ({post, handleMarkasRead, handleBookmark}) => {
    const {author, author_img, cover, hashtags, posted_date, reading_time, title, id}=post
  return (
    <div className=" ">
        <div className="flex flex-col rounded-md">
        <div className="h-full w-full ">
            <img
            src={cover}
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
            />
        </div>
        <div>
            <div className="py-4">
            <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-2">
                    <img
                    className="inline-block h-8 w-8 rounded-full"
                    src={author_img}
                    alt="Dan_Abromov"
                    />
                    <span className="flex flex-col">
                    <span className="text-[10px] font-medium text-gray-900">{author}</span>
                    <span className="text-[8px] font-medium text-gray-500">{posted_date}</span>
                    </span>
                </div>
                <div className='flex gap-2 items-center'>
                    <span className='text-slate-400'>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(post)} className='text-2xl'><BsBookmarkPlus/> </button>
                </div>
            </div>
            <h1 className="inline-flex mt-3  items-center text-lg font-semibold">
                {title}{" "}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
                >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </h1>
            <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                debitis?
            </p>
            <div className="mt-4">
                {
                    hashtags.map((hastag, idx) => {
                        return (
                            <span key={idx} className="mb-2 mr-2 inline-block rounded-full bg-gray-100     px-3 py-1 text-[10px] font-semibold text-gray-900">
                                # {hastag}
                            </span>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={()=>handleMarkasRead(reading_time, id)} className="text-blue-700 font-semibold underline mt-3">Mark as read</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blog