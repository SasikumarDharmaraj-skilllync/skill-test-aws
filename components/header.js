import Button from "./button";
import Link from "next/link";

const Header = (props) => {

    const headerData = props.data.HeaderSection

    return (
        <>
            {headerData ?
                <div className="container-fluid nav_bg">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                        <div className="container">
                            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link className="navbar-brand" href={headerData.Logo.InternalLink}>
                                <img className="logo" src={headerData.Logo.Image} alt="logo" />
                            </Link>
                            <div className="collapse navbar-collapse pl-5 login_align" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto nav_custom header_menu">
                                    {headerData.Menu.map((p, i) => (
                                        <li className="nav-item" key={i}>
                                            <Link className="nav-link" href={p.InternalLink}>{p.Name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="book_demo_btn" value="Book a Free Demo" />
                                <Button className="login_btn login_align" value="login" />
                            </div>
                        </div>
                    </nav>
                </div> : null}
        </>
    )
}
export default Header;