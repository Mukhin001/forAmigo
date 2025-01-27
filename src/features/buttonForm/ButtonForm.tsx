import { changeDisplay } from "../../features/posts/openFormSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AddPostForm } from "../posts/AddPostForm";
import { useState } from "react";

const ButtonForm = () => {
    const openForm = useAppSelector(state => state.openForm.value);
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return ( 
        <section>
            <button 
                onClick={() => dispatch(changeDisplay())}>{openForm ? 'Close' : 'Open'}
            </button>

            {openForm && <AddPostForm title={title} setTitle={setTitle} content={content} setContent={setContent}/> }
        </section>
     );
};
 
export default ButtonForm;