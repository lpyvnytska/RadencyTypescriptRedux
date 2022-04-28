import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { parseDatesFromText } from '../../utils/regexpDate'

import NoteForm from '../NoteForm/NoteForm';
import { addNote } from '../../redux/actions';
import { Note, Category } from '../../redux/types';

import './MiddleBlock.css'


const MiddleBlock: FC = () => {
    const dispatch = useDispatch()
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

    const addNoteHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const { name, categories, content } =
            e.target as typeof e.target & {
                name: { value: string };
                categories: { value: string };
                content: { value: string };
            };
        setIsFormVisible(false)
        let newNote: Note = {
            name: name.value,
            created: new Date(),
            category: Category[categories.value as keyof typeof Category],
            content: content.value,
            dates: parseDatesFromText(content.value),
            active: true
        }
        dispatch(addNote(newNote));
    }


    return (
        <div>
            <button onClick={() => setIsFormVisible(true)} className="create__button">Create note</button>
            {isFormVisible && <NoteForm handleCancel={() => setIsFormVisible(false)} handleSubmit={e => addNoteHandler(e)} />}
        </div>
    );
}

export default MiddleBlock;