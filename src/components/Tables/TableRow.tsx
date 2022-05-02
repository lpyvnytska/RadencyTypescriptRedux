import React, { FC } from "react";
import { icons } from "../Categories/svg_icons";
import { IRow } from "./TableTypes";

interface ITableRow {
    row: IRow,
    additionIcons?: boolean,
    editCurrentNote?: any,
    changeStatusCurrentNote?: any,
    deleteCurrentNote?: any
}

const TableRow: FC<ITableRow> = ({ row, additionIcons = false, editCurrentNote, changeStatusCurrentNote, deleteCurrentNote }) => {
    let { id, icon, ...showRow } = row

    return (
        <tr key={id} className="table__row">
            <td className="table__icon-round">
                <svg className="icon">
                    <use xlinkHref={icon}></use>
                </svg>
            </td>
            {
                Object.entries(showRow).map(([key, value]) =>
                    <td key={key + id}>{value.toString()}</td>
                )
            }
            {additionIcons && editCurrentNote &&
                <>
                    <td onClick={() => editCurrentNote(id)}>
                        <svg className="icon">
                            <use xlinkHref={icons['EDIT_ICON']}></use>
                        </svg>
                    </td>
                    <td onClick={() => changeStatusCurrentNote(id)}>
                        <svg className="icon">
                            <use xlinkHref={icons['ARCHIVE_ICON']}></use>
                        </svg>
                    </td>
                    <td onClick={() => deleteCurrentNote(id)}>
                        <svg className="icon">
                            <use xlinkHref={icons['DELETE_ICON']}></use>
                        </svg>
                    </td>
                </>
            }
        </tr>
    );
}

export default TableRow;