import SideBar from "./SideBar";


const DashboardLayout = ({ children }) => {
    return (
        <div className="container mx-auto flex gap-10">
            <SideBar></SideBar>
            {children}
        </div>
    );
};

export default DashboardLayout;