






import {Link} from "react-router-dom"

import "../css/nav.css"





const NavBar = () => {

    const navBarLinks = [
        {
            display:'Home',
            url:'/'
        },
        {
            display:'Market',
            url:'/Market'
        },
        {
            display:'Create',
            url:'/create'
        },
        {
            display:'Contact',
            url:'/Contact'
        },
    ]

    // Show Nav Bar In Small Screens
    const showNav = (e) => {
        e.target.parentElement.querySelector('nav').classList.toggle('active')
        
    }


    window.addEventListener("scroll", e => {
        if (window.scrollY >= 100) {
            document.documentElement.querySelector('.bars').classList.add('un-active')
        } else {
            document.documentElement.querySelector('.bars').classList.remove('un-active')
        }
    })

    return (
        <>
        {/* Nav Bar */}
        <nav>

        <div className="logo">
        <Link to={'/'}><h2><i className="fa-solid fa-fire-flame-curved"></i> NTFs</h2></Link>
        </div>
        <div className="links">
            <ul>
        {
            navBarLinks.map((item,index) => {
                return (
                        <li key={index}><Link to={item.url}>{item.display}</Link></li>
                        )
                    })
                }
                </ul>
        </div>
        <button className="btn" >
            <Link to={'/wallet'}><span>Connect Wallet</span></Link>
                <i className="fa-solid fa-wallet"></i>
        </button>
        </nav>
        <i className="fa-solid fa-bars bars" onClick={(e) => showNav(e)}></i>
        </>
    )

}



export default NavBar;