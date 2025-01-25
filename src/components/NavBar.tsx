import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeDisplay } from "./openFormSlice";


export const Navbar = () => {
    const dispatch = useAppDispatch();
    const openDispalay = useAppSelector(state => state.openDispale.value);

    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>

                <div className="navContent">
                <div className="navLinks"></div>
                </div>
                <button 
                    onClick={() => dispatch(changeDisplay())}>{openDispalay ? 'Close' : 'Open'}</button>
            </section>
        </nav>
    )
};
