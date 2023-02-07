import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
     );
}

export default DefaultLayout;