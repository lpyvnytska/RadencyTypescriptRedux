import React, {FC} from "react";

import './Tables.css'

const TableToDoList: FC = () => {
    return (
        <div>
            <table className="table todolist-table">
                <colgroup>
                    <col className="table__category-icon"/>
                    <col className="table__name"/>
                    <col className="table__created"/>
                    <col className="table__category"/>
                    <col className="table__content"/>
                    <col className="table__dates"/>
                    <col className="table__active-icon"/>
                    <col className="table__active-icon"/>
                    <col className="table__active-icon"/>
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
                            <svg className="icon">
                                <use xlinkHref="sprite.svg#archive"></use>
                            </svg>
                        </th>
                        <th className="table__header-icon delete">
                            <svg className="icon">
                                <use xlinkHref="sprite.svg#delete"></use>
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody id="list-table">
                    
                </tbody>
            </table>
        </div>
    );
}

export default TableToDoList;