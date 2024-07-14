import Header from "~/Layout/components/Header";
import SideBar from "./SideBar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <SideBar/>
                <div className="content">
                    {/* content động, nên sẽ chuyền từ bên ngoài vào */}
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;