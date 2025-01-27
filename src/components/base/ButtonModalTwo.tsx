import Modal from "./Modal";
import { useState } from "react";

const ButtonModalTwo = () => {
    const [clickState, setClickState] = useState(false);

    return ( 
        <section>
            <h2>Two</h2>
            <button onClick={() => setClickState(!clickState)}>{clickState ? 'Close Modal Two' : 'Open Modal Two'}</button>
            {clickState && 
                <Modal setClickState={setClickState}>
                     <h3>Hello Two</h3>
                </Modal>}
        </section>
     );
};
 
export default ButtonModalTwo;