import { Link } from "react-router-dom";
import Drawer from "../drawer/Drawer";
import { useState } from "react";
import './style.css';

export const Navbar = () => {
    const [translate, setTranslate] = useState<boolean>(true);

    function openDrawer() {
        setTranslate(!translate);
    };

    return (
        <nav className="navWrapper">
            <section>
                <h1>Redux Essentials Example</h1>
                <article className="linksWrapper">
                    <div className="linksWrapperDiv">
                        <Link to='/'>Home</Link>
                        <Link to='/form'>Form</Link>
                        <Link to='/modalone' >Modal One</Link>
                        <Link to='/modaltwo' >Modal Two</Link>
                    </div>
                    <div>
                        <button onClick={openDrawer}>{translate ? 'Open Drawer' : 'Close Drawer'}</button>
                    </div>
                </article>
                <Drawer transform='bottom' translate={translate}></Drawer>
            </section>
        </nav>
    )
};
