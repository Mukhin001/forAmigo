import { useState } from "react";
import Modal from "./Modal";
import Tooltip from "../tooltip/Tooltip";

const ButtonModalOne = () => {
    const [clickState, setClickState] = useState(false);


    return ( 
        <section>
            <div className="tooltipWrapper">
                <h2>One</h2>
                <Tooltip title='How a you?' placement='topLeft'>Tooltip One</Tooltip>
            </div>
            <button onClick={() => setClickState(!clickState)}>{clickState ? 'Close Modal One' : 'Open Modal One'}</button>
            {clickState && 
                <Modal setClickState={setClickState}>
                    <h3>Hello One</h3>
                </Modal>}
        </section>
     );
};
 
export default ButtonModalOne;