import React, {FC, useState, FormEvent, ChangeEvent } from 'react';
import { Category } from '../../redux/types'

import './NoteForm.css'

export interface INoteFormProps {
    note?: {
        name?: string;
        category?: string;
        content?: string;
    },
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
    handleCancel: () => void
}

const NoteForm: FC<INoteFormProps> = ({ note = {}, handleSubmit, handleCancel}) => {
    const [currentName, setCurrentName] = useState(note.name||'')
    const [currentCategory, setCurrentCategory] = useState(note.category)
    const [currentContent, setCurrentContent] = useState(note.content||'')

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
                <input type="text" name="name" value={currentName} placeholder="Name" required 
                    onChange={changeName}/>
                <select name="categories" value={currentCategory}
                    onChange={changeCategory}
                >
                    {Object.keys(Category).map(item => {
                        return (
                            <option value={item} key={item}>
                                {item}
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