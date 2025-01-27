import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <nav style={{marginBottom: 20}}>
            <section>
                <h1>Redux Essentials Example</h1>
                <div 
                    style={{
                        display: 'flex',
                        gap: 20
                    }}
                >
                    <Link to='/'>Home</Link>
                    <Link to='/modalone' >Modal One</Link>
                    <Link to='/modaltwo' >Modal Two</Link>
                </div>
            </section>
        </nav>
    )
};
