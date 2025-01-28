import { changeDisplay } from "../../features/posts/openFormSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AddPostForm } from "../posts/AddPostForm";
import { useState } from "react";
import Snaks from "../../components/Snaks";

interface SnaksObj {
    id: number,
    top: number,
};

const ButtonForm = () => {
    const openForm = useAppSelector(state => state.openForm.value);
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [snaks, setSnaks] = useState(false);
    const [snaksArr, setSnaksArr] = useState<SnaksObj[]>([]);
    
    if(snaks) {
        setTimeout(() => {
            setSnaksArr(current => current.filter((snak, i) => i !== 0));
            if(snaksArr.length === 0) {
                setSnaks(false)
            }
        }, 3000);
    };

    function clickSnaks() {
        const newSnaks = (snaksArr.length === 0) ? {
            id: 1,
            top: 20,
        } : {
            id: snaksArr[snaksArr.length - 1]?.id +1,
            top: snaksArr[snaksArr.length - 1]?.top + 20,
        };

        
        setSnaksArr(current => [...current, newSnaks]);
        setSnaks(true);
    };

    return ( 
        <section>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <button 
                    onClick={() => dispatch(changeDisplay())}>{openForm ? 'Close' : 'Open'}
                </button>
                <button 
                    onClick={clickSnaks}>Snaks</button>
            </div>
            { snaks && snaksArr.map(snak => <Snaks key={snak.id} position='bottomRight' top={snak.top}>Hello</Snaks>)}
            
            {openForm && <AddPostForm title={title} setTitle={setTitle} content={content} setContent={setContent}/> }
        </section>
     );
};
 
export default ButtonForm;