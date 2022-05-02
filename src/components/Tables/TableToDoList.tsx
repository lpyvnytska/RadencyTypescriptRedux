import React, { FC, useState, useEffect, FormEvent } from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";
import { RootState } from '../../redux/store'

import { icons } from "../Categories/svg_icons";
import { parseDatesFromText } from '../../utils/regexpDate'

import './Tables.css'
import { Category, Note } from "../../redux/types";
import { ITodoRow } from "./TableTypes";
import { useDispatch } from "react-redux";
import { changeStatusNote, deleteNote, editNote } from "../../redux/actions";
import NoteForm from "../NoteForm/NoteForm";
import { deleteFirstLetter } from "../../utils/deleleFirstLetter";
interface ITableToDoList {
    showActive: boolean
}

const TableToDoList: FC<ITableToDoList> = ({ showActive = true }) => {
    let dispatch = useDispatch()
    const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false)
    const [currentEditabledNote, setCurrentEditabledNote] = useState({})

    let fullList = useSelector((state: RootState) => state.list.notes)

    const [isListActive, setIsListActive] = useState(true)
    const [currentList, setCurrentList] = useState(fullList.filter(note => note.active === isListActive))
    useEffect(() => {
        setCurrentList(fullList.filter(note => note.active === isListActive))
    }, [fullList, isListActive])

    const handleArchiveState = () => {
        setIsListActive(!isListActive)
    }
    const editCurrentNote = (id:number) => {
        let currentNote = fullList.filter(note => note.id === id)[0]
        setCurrentEditabledNote ({id: currentNote.id, name:currentNote.name, category: Category[currentNote.category], content:currentNote.content})
        setIsEditFormVisible(true)
    }
    const changeStatusCurrentNote = (id:number) => {
        dispatch(changeStatusNote(id))
    }
    const deleteCurrentNote = (id:number) => {
        dispatch( deleteNote(id))
    } 
    const editNoteHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsEditFormVisible(false)
        const {id, name, categories, content } =
            e.target as typeof e.target & {
                id: {value: string}
                name: { value: string };
                categories: { value: string };
                content: { value: string };
            };
         
        let currentNote = fullList.filter(note => note.id === parseInt(id.value))[0]
        let newNote: Note = {
            id: parseInt(id.value),
            name: name.value,
            created: currentNote.created,
            category: Category[categories.value as keyof typeof Category],
            content: content.value,
            dates: parseDatesFromText(content.value),
            active: currentNote.active
        }
       
        dispatch(editNote(newNote));
        setCurrentList([...currentList, newNote])       
    } 

    return (
        <div>
            <table className="table todolist-table">
                <colgroup>
                    <col className="table__category-icon" />
                    <col className="table__name" />
                    <col className="table__created" />
                    <col className="table__category" />
                    <col className="table__content" />
                    <col className="table__dates" />
                    <col className="table__active-icon" />
                    <col className="table__active-icon" />
                    <col className="table__active-icon" />
                </colgroup>
                <thead>
                    <tr className="table__head">
                        <th>&nbsp;</th>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Dates</th>
                        <th className="table__header-icon">&nbsp;</th>
                        <th className="table__header-icon archive" id="table-switcher">
                            <svg className="icon" onClick={handleArchiveState}>
                                <use xlinkHref={icons['ARCHIVE_ICON']}></use>
                            </svg>
                        </th>
                        <th className="table__header-icon delete">
                            <svg className="icon">
                                <use xlinkHref={icons['DELETE_ICON']}></use>
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody id="list-table">
                    {currentList.map((note: Note) => {
                        let row: ITodoRow = {
                            id: note.id || 0,
                            icon: note.category.toString(),
                            name: note.name,
                            created: note.created,
                            category: deleteFirstLetter(Category[note.category]),
                            content: note.content,
                            dates: note.dates || ''
                        }
                        return <TableRow row={row} 
                        additionIcons={true}
                        editCurrentNote ={editCurrentNote}
                        changeStatusCurrentNote ={changeStatusCurrentNote}
                        deleteCurrentNote ={deleteCurrentNote}
                        />
                    })}
                </tbody>
            </table>
            {isEditFormVisible && <NoteForm 
                note={currentEditabledNote} 
                handleCancel={() => setIsEditFormVisible(false)} 
                handleSubmit={e => editNoteHandler(e)} />}
        </div>
    );
}

export default TableToDoList;