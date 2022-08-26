function Header() {
    return (
    
        <div className="header">
        <div className="container">
            <a href="#" className="navbar-brand scroll-top">Victory</a>
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="navbar-header">
                    <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
        
                <div id="main-nav" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="menu.html">Our Menus</a></li>
                        <li><a href="blog.html">Blog Entries</a></li>
                        <li><a href="/contato">Contact Us</a></li>
                    </ul>
                </div>
            
            </nav>
         
        </div>
 
    </div>
  

    );
  }
  
  export default Header;
  