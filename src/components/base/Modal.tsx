import  './style/modalStyle.css';

const Modal = (props: any) => {
    
    return ( 
        <section className="modalWrapper">
            <div className='modalContent'>
                {props.children}
                <button onClick={() => props.setClickState(false)}>X</button>
            </div>
        </section>
     );
};
 
export default Modal;