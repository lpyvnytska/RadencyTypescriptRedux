import React, {FC} from 'react';

export interface IIconTDProps {
    listener: any,
    innerHtml:string
}

const IconTD:FC<IIconTDProps> = ({listener, innerHtml}) => {
    return(
        <td onClick={listener}>
            {innerHtml}
        </td>
    )
}

export default IconTD