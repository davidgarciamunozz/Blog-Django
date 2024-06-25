import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid"
import BlogCardHorizontal from "./BlogCardHorizontal"


function BlogList ({posts}) {
    return (
        <div className="overflow-hidden px-8 bg-white">
        <ul role="list" className="divide-y space-y-8 gap-8  divide-gray-100">
        {posts && posts.length > 0 ? (
            posts.map((post, index) => (
                <BlogCardHorizontal key={index} data={post} index={index} />
            ))
            ) : (
            <p>No posts available</p>
            )}
        </ul>
      </div>
        
    )
}

export default BlogList