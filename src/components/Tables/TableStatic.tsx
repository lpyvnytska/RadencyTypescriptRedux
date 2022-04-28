import React, { FC } from "react";

const TableStatic: FC = () => {
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

                </tbody>
            </table>
        </div>
    );
}

export default TableStatic;