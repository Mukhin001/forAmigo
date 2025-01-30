import './style.css';

interface PositionTooltip {
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
};

const Tooltip = (props: any) => {
    let position: PositionTooltip = {};

    switch(props.placement) {
        case 'topLeft': 
            position = { bottom: '100%', left: '-60%' } ;
            break;
        case 'topRight': 
            position = { top: '20px', right: '20px' } ;
            break;
        case 'bottomRight': 
            position = { top: '100%', right: '0' } ;
            break;
        case 'bottomLeft': 
            position = { bottom: '20px', left: '20px' } ;
            break;
    }

    return ( 
        <section className='wrapperTooltip'>
            <h3>{props.children}</h3>
            <article className='popUpTooltip' style={position}>
                <h4 className='popUpTooltipH4'>{props.title}</h4>
            </article>
        </section>
     );
};
 
export default Tooltip;