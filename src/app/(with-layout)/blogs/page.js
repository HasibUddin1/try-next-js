import Link from "next/link";

export const metadata = {
    title: 'Next Hero | Blogs',
    description: 'Next Hero',
}

// const blogs = [
//     {
//         id: 1,
//         year: 2016,
//         title: 'Title 1'
//     },
//     {
//         id: 2,
//         year: 2018,
//         title: 'Title 2'
//     },
//     {
//         id: 3,
//         year: 2015,
//         title: 'Title 3'
//     },
//     {
//         id: 4,
//         year: 2023,
//         title: 'Title 4'
//     }
// ]

const BlogsPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache'
    })
    const blogs = await res.json()

    return (
        <div>
            {
                blogs.map(SingleBlog => <div className="block border-2 mt-2 p-2 rounded-xl" key={SingleBlog.id}>
                    <p className="text-xl font-semibold mb-3">{SingleBlog.title}</p>
                    <p>{SingleBlog.body}</p>
                    <Link className="" href={`/blogs/${SingleBlog.id}`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700 ease-in-out duration-200 mt-2">Details</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;