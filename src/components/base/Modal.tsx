

const Modal = (props: any) => {
    
    return ( 
        <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {props.children}
            <button onClick={() => props.setClickState(false)}>X</button>
        </section>
     );
};
 
export default Modal;