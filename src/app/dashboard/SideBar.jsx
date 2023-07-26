import Link from "next/link";

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/dashboard/addProducts',
        title: 'Add Products'
    },
    {
        path: '/dashboard/manageProducts',
        title: 'Manage Products'
    },
    {
        path: '/dashboard/profile',
        title: 'Profile'
    }
]

const SideBar = () => {
    return (
        <aside>
            <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
            <ul>
                {navLinks.map(SingleLink => <li
                    key={SingleLink.path}
                >
                    <Link className="font-semibold" href={SingleLink.path}>{SingleLink.title}</Link>
                </li>)}
            </ul>
        </aside>
    );
};

export default SideBar;