import './style.css';

interface TranslateDrawer {
    bottom?: string,
    left?: string,
    display?: string,
    width?: string,
    height?: string,
    top?: string,
};

const Drawer = (props: any) => {
    let transform: TranslateDrawer = { };

    switch(props.transform) {
        case 'left':
            const positionX = props.translate ? '-20%' : '0';
            transform = { top: '0', left: positionX, display: 'inline-block', height: '100vh'};
            break;
        case 'bottom': 
            const positionY = props.translate ? '-100%' : '0';
            transform = { bottom: positionY, display: 'flex', width: '100%' };
            break;
    }

    return ( 
        <article className='wrapperDrawer' style={transform}>
            <ul>
                <li>Inbox</li>
                <li>Starred</li>
                <li>Send email</li>
                <li>Drafts</li>
            </ul>
            <ul>
                <li>All mail</li>
                <li>Trash</li>
                <li>Spam</li>
            </ul>
        </article>
     );
};
 
export default Drawer;