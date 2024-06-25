
import { Link } from "react-router-dom"
import moment from "moment"

function BlogCardHorizontal ({data,index}) {
    
    return (
        <li key={index}>
              <Link to='/' className="block hover:shadow-2xl rounded-lg transition duration-300 ease-in-out">
                <div className="flex items-center my-8">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0">
                      <img id={index} className="h-56 object-cover w-72 rounded-lg " src={`http://127.0.0.1:8000${data.thumbnail}`} alt="" />
                    </div>
                    <div className="min-w-0 flex-1 px-4 ">
                     {/* contenido del post  */}
                     <p className="text-2xl font-bold text-gray-900 hover:text-orange-600 transition duration-300 ease-in-out">{data.title}</p>
                     <span className="hover:text-orange-600 transition duration-300 ease-in-out mt-2 font-medium text-gray-500 text-sm "> <Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
                     <span className=" mt-2 font-medium text-gray-500 text-sm mx-2">{moment(data.published).format('LL')}</span> &middot;
                     <span className=" mt-2 font-medium text-gray-500 text-sm mx-2">{`${data.time_read} min read`}</span>
                     <p className="text-base mt-4 text-gray-600 leading-7 ">{data.description}</p>
                    </div>
                  </div>
                 
                </div>
              </Link>
            </li>
    )
}

export default BlogCardHorizontal