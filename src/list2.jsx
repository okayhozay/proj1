import React from "react";

const V1 = () => {
    const studentDetail = [
        {name: 'Bilal', ID: 9993},
        {name: 'Ali', ID: 8882},
        {name: 'Riz', ID: 7771}
    ]
    return(
        <ul>
            {
                studentDetail.map(x => (
                    <li key = {x.ID}>
                        {x.ID}{x.name}
                    </li>
                ))
            }
        </ul>
    )
}
export default V1;