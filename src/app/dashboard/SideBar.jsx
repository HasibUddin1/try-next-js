
import NavLink from "../components/NavLink";

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
            <ul className="font-semibold">
                {navLinks.map(SingleLink => <li
                    key={SingleLink.path}
                    className="hover:bg-slate-400 ease-in-out duration-200 px-4 py-2 rounded-lg"
                >
                    <NavLink exact activeClassName="bg-slate-400 px-4 py-2 rounded-lg" href={SingleLink.path}>{SingleLink.title}</NavLink>
                </li>)}
            </ul>
        </aside>
    );
};

export default SideBar;