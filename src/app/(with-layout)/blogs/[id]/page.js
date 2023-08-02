import loadAllBlogs from '@/utils/loadAllBlogs';
import loadSingleBlog from '@/utils/loadSingleBlog';


export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlog(params.id)
    return {
        title: `Next Hero | ${title}`
    }
}

export const generateStaticParams = async () => {
    const blogs = await loadAllBlogs()

    return blogs.map(({ id }) => ({
        id: id.toString()
    }))
}

const SingleBlog = async ({ params }) => {

    const blog = await loadSingleBlog(params.id)

    return (
        <div>
            <h1 className='text-xl font-semibold'>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
};

export default SingleBlog;