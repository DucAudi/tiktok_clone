import Header from "~/Layout/components/Header";
function HeaderOnly({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {/* content động, nên sẽ chuyền từ bên ngoài vào */}
                    {children}
                </div>
            </div>
        </div>
     );
}

export default HeaderOnly;