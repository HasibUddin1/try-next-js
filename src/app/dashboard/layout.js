

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <a href="/dashboard/profile">Profile</a>
                <a href="/">Home</a>
            </nav>
            <div>
                <p>Sidebar</p>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;