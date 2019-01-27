import React from "react"
import getMessage from "../js/message";
import getList from "../js/list"

export default () => <div>
    <h2>{getMessage()}</h2>
    <ul>
        {getList().map((item) => <li>{item}</li>)}
    </ul>
</div>
