import { connect } from "react-redux";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get_blog } from "redux/actions/blog/blog";
import moment from "moment";

function PostDetail ({
    get_blog,
    post
}){

    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        window.scrollTo(0,0)
        get_blog(slug);
    }, [])

    return (
        <Layout>
            <Navbar />
            <Layout>
            <Navbar/>
            {
                post && post.slug === slug ?
                <div className="pt-20">
                      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={`http://127.0.0.1:8000${post.thumbnail}`}
            alt=""
          />
          <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
            lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div> 
                <div className="relative overflow-hidden bg-white py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
            <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                <svg
                className="absolute top-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                >
                <defs>
                    <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                    >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>
                <svg
                className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                >
                <defs>
                    <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                    >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                <svg
                className="absolute bottom-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                >
                <defs>
                    <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                    >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
            </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
             
            <div className="mx-auto max-w-prose text-lg">
                <h1>
             
                </h1>
                <div className="min-w-0 flex-1 pt-8 ">
             
                     <div className=""> 
                        <span className="hover:text-orange-600 transition duration-300 ease-in-out font-medium text-gray-500 text-sm "> <Link to={`/category/${post.category.slug}`}>{post.category.name}</Link></span> &middot;
                        <span className="  font-medium text-gray-500 text-sm mx-2">{moment(post.published).format('LL')}</span> &middot;
                        <span className="  font-medium text-gray-500 text-sm mx-2">{`${post.time_read} min read`}</span>
                        <p className="text-xl mt-4 text-gray-500 leading-8 ">{post.description}</p>
                     </div>

                    </div>
                <p className="mt-8 text-xl leading-8 text-gray-500">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                egestas fringilla sapien.
                </p>
            </div>
            <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                <p>
                Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
                </p>
                <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
                porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
                purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
                </p>
                <h2>From beginner to expert in 30 days</h2>
                <p>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                ipsum eu a sed convallis diam.
                </p>
                <blockquote>
                <p>
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                    pellentesque. Blandit amet, sed aenean erat arcu morbi.
                </p>
                </blockquote>
                <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>
                
                <h2>Everything you need to get up and running</h2>
                <p>
                Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
                volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
                </p>
                <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>
            </div>
            </div>
                </div>
             </div>
                :
                <>Loading</>
            }
            <Footer/>
        </Layout>
            <Footer />
        </Layout>   
    )
}

const mapStateToProps = state => ({
    post: state.blog.post
})

export default connect(mapStateToProps,{
    get_blog
})(PostDetail);