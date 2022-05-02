import React, { FC } from "react";
import { Category, Note } from "../../redux/types";
import { deleteFirstLetter } from "../../utils/deleleFirstLetter";
import TableRow from "./TableRow";
import { IStatisticRow } from "./TableTypes";

interface ITableStatic {
    fullList: Note[]
}

const TableStatic: FC<ITableStatic> = ({ fullList = [] }) => {

    const categories = Object.keys(Category).filter(k => k[0] !== '_')
    let staticList: any[] = []
    for (let cat of categories) {
        staticList.push({ name: cat, total: 0, active: 0 })
    }
    fullList.forEach(note => {
        let el = staticList.find(i => i.name === note.category);
        el.total++
        if (note.active) {
            el.active++
        }
    })

    return (
        <div>
            <table className="table">
                <colgroup>
                    <col className="table__category-icon" />
                    <col className="table__category" />
                    <col className="table__active" />
                    <col className="table__archived" />
                </colgroup>
                <thead>
                    <tr className="table__head">
                        <th>&nbsp;</th>
                        <th>Note Category</th>
                        <th>Active</th>
                        <th>Archived</th>
                    </tr>
                </thead>
                <tbody id="stats-table">
                    {staticList.map((note) => {
                        let row: IStatisticRow = {
                            id: note.id || 0,
                            icon: note.name,
                            category: deleteFirstLetter(Category[note.name]),
                            active: note.active,
                            archived: note.total - note.active
                        }
                        return <TableRow row={row} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TableStatic;