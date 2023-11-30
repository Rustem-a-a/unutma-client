import React from 'react';
import {useParams} from "react-router-dom";

const Note = () => {
    const {noteId} = useParams()
    return (
        <div>
            {noteId}
        </div>
    );
};

export default Note;
