import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import Pagination from "./Pagination";
function DefaultLayout({children}) {
    return ( 
        <div className="flex flex-col">
            <Header />
            <div className="container flex">
                <div>
                <Sidebar />
                </div>                
                <div className="content flex-1 items-center justify-between">{children}
                
                <Pagination/>
                
                </div>
                
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
     );
}

export default DefaultLayout;