import React, { FC, useState, useEffect, MouseEvent } from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";
import { RootState } from '../../redux/store'

import { icons } from "../Categories/svg_icons";

import './Tables.css'
import { Category, Note } from "../../redux/types";
import { ITodoRow } from "./TableTypes";

interface ITableToDoList {
    showActive: boolean
}

const TableToDoList: FC<ITableToDoList> = ({ showActive = true }) => {

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

    }
    const changeStatusCurrentNote = (id:number) => {

    }
    const deleteCurrentNote = (id:number) => {
        
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
                            created: note.created.toLocaleString(),
                            category: Category[note.category],
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
        </div>
    );
}

export default TableToDoList;