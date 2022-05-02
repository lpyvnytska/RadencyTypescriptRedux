import React, {FC, useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { Category } from '../../redux/types'
import { deleteFirstLetter } from '../../utils/deleleFirstLetter';

import './NoteForm.css'

export interface INoteFormProps {
    note?: {
        id?: number;
        name?: string;
        category?: string;
        content?: string;
    },
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
    handleCancel: () => void
}

const NoteForm: FC<INoteFormProps> = ({note = {}, handleSubmit, handleCancel}) => {
    
    const [currentName, setCurrentName] = useState(note.name)
    const [currentCategory, setCurrentCategory] = useState(note.category)
    const [currentContent, setCurrentContent] = useState(note.content)

    const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentCategory(e.target.value)
    }

    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentName(e.target.value)
    }
    const changeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentContent(e.target.value)
    }

    return (
        <div className='modal-div'>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="hidden" name="id" value={note.id} />
                <input type="text" name="name" value={currentName} placeholder="Name" required 
                    onChange={changeName}/>
                <select name="categories" value={currentCategory}
                    onChange={changeCategory}
                >
                    {Object.keys(Category)
                    .filter( k => k[0]==='_')
                    .map(item => {
                        return (
                            <option value={item} key={item}>
                                {deleteFirstLetter(item)}
                            </option>
                        )
                    })}
                </select>
                <textarea name="content" placeholder="Content" value ={currentContent}
                    onChange={changeContent}></textarea>
                <input className="cancel" type="button" value="Cancel"
                    onClick={handleCancel} />
                <input id="submit-button" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NoteForm