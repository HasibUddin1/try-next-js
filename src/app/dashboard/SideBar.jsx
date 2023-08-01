
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
                >
                    <NavLink exact={SingleLink.path == '/'} activeClassName="bg-slate-400" href={SingleLink.path}>{SingleLink.title}</NavLink>
                </li>)}
            </ul>
        </aside>
    );
};

export default SideBar;