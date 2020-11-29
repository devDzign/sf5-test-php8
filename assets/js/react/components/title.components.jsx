import React from 'react';
import Icon from "./icon.components";

const Title = ({count}) => {
    return (
        <h3>
            <Icon icon={"comments"}/> Total Item : {count}
        </h3>
    )
}

export default Title;
