

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div>
                <p>Sidebar</p>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;