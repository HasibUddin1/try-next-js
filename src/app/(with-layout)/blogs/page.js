import Link from "next/link";

export const metadata = {
    title: 'Next Hero | Blogs',
    description: 'Next Hero',
}

const blogs = [
    {
        id: 1,
        year: 2016,
        title: 'Title 1'
    },
    {
        id: 2,
        year: 2018,
        title: 'Title 2'
    },
    {
        id: 3,
        year: 2015,
        title: 'Title 3'
    },
    {
        id: 4,
        year: 2023,
        title: 'Title 4'
    }
]

const BlogsPage = () => {
    return (
        <div>
            {
                blogs.map(SingleBlog => <Link href={`/blogs/${SingleBlog.year}/${SingleBlog.id}`} key={SingleBlog.id}>{SingleBlog.title}</Link>)
            }
        </div>
    );
};

export default BlogsPage;