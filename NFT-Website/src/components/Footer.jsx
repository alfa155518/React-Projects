
import { Link } from "react-router-dom";




const Footer = () => {


    const myAccounts = [
        {
            display: 'Author Profile',
            url: '/seller-profile'
        },
        {
            display: 'Create Item',
            url: '/create'
        },
        {
            display: 'Collection',
            url: '/market'
        },
        {
            display: 'Edit Profile',
            url: '/editProfile'
        },
    ]

    const resources = [
        {
            display: 'Help Center',
            url: '#'
        },
        {
            display: 'Partner',
            url: '#'
        },
        {
            display: 'Community',
            url: '#'
        },
        {
            display:'Activity',
            url: '#'
        }
    ]

    const Company = [
        {
            display:'About',
            url: '#'
        },
        {
            display:'Carer',
            url: '#'
        },
        {
            display:'Ranking',
            url: '#'
        },
        {
            display:'Contact',
            url: '/contact'
        },
    ]



    return (
        <footer>
            <div className="container container-footer ">
        <ul>
            <li>
        <div className="logo">
        <Link to={'/'}><h2><i className="fa-solid fa-fire-flame-curved"></i> NTFs</h2></Link>
        </div>
            </li>
            <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ratione ex quas est distinctio rerum, expedita doloremque mollitia eum sequi.</p></li>
        </ul>

        <ul>
        <h2>My Account</h2>
        {
            myAccounts.map((item,index) => <li key={index}><Link to={item.url}>{item.display}</Link></li>)
        }
        </ul>

        <ul>
        <h2>Resources</h2>
        {
            myAccounts.map((item,index) => <li key={index}><Link to={item.url}>{item.display}</Link></li>)
        }
        </ul>

        <ul>
        <h2>Company</h2>
        {
            myAccounts.map((item,index) => <li key={index}><Link to={item.url}>{item.display}</Link></li>)
        }
        </ul>

        <ul>
        <h2>NewsLetter</h2>
        <form>
            <input type="email" placeholder="Email"/>
        </form>
        <ul className="socials">
        <li><i className="fa-brands fa-facebook"></i></li>
        <li><i className="fa-brands fa-x-twitter"></i></li>
        <li><i className="fa-brands fa-linkedin"></i></li>
        <li><i className="fa-brands fa-youtube"></i></li>
        <li><i className="fa-brands fa-instagram"></i></li>
        </ul>
        </ul>
        </div>
        <div className="copy-right">
        <p>CopyRights 2023, Developed By <span>Ahmed Hassop</span></p>
        </div>
        </footer>
    )

}



export default Footer;