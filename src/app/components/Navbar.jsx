import Link from "next/link";

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    }
]

const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto py-4">
            <div>
                <h1 className="text-3xl font-bold">Next Hero</h1>
            </div>
            <div>
                <ul className="flex gap-5 font-semibold">
                    {navLinks.map(SingleLink => <li key={SingleLink.path}>
                        <Link href={SingleLink.path}>{SingleLink.title}</Link>
                    </li>)}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;