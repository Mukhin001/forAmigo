import { useState } from "react";
import Modal from "./Modal";

const ButtonModalOne = () => {
    const [clickState, setClickState] = useState(false);


    return ( 
        <section>
            <h2>One</h2>
            <button onClick={() => setClickState(!clickState)}>{clickState ? 'Close Modal One' : 'Open Modal One'}</button>
            {clickState && 
                <Modal setClickState={setClickState}>
                    <h3>Hello One</h3>
                </Modal>}
        </section>
     );
};
 
export default ButtonModalOne;