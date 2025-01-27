interface PropsPerent {
    title: string,
    p: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
};

const Modal = ({ title, p, setOpenModal }: PropsPerent) => {
    return ( 
        <section
            style={{
                border: '2px solid white',
                borderRadius: 10,
            }}
        >
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button onClick={() => setOpenModal(false)}>X</button>
            </div>
            <h2>{title}</h2>
            <p>{p}</p>
        </section>
     );
};
 
export default Modal;