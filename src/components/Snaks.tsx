import './style/snaksStyle.css';

interface PositionSnaks {
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
};

const Snaks = (props: any) => {
    let position: PositionSnaks = {};

    switch (props.position) {
        case 'topLeft': 
            position = { top: props.top, left: '20px' } ;
            break;
        case 'topRight': 
            position = { top: props.top, right: '20px' } ;
            break;
        case 'bottomRight': 
            position = { bottom: props.top, right: '20px' } ;
            break;
        case 'bottomLeft': 
            position = { bottom: props.top, left: '20px' } ;
            break;
    };
    
    return ( 
        <section className="snaksWrapper" style={position}>
           {props.children}
            <button 
                className='btnCloseSnaks'
                onClick={() => props.setSnaks(false)}
                >x</button>
        </section>
     );
};
 
export default Snaks;