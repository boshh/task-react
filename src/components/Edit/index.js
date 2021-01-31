import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context"


import classes from "./style.module.scss"

const Edit = (props) => {
    const { putTask, postTask } = useContext(TaskContext)
    const { data = {
        description: ""
    }, type = "edit" } = props

    const [editData, setEditData] = useState(data);

    const onChange = (e) => {
        editData.description = e.target.value
        setEditData({ ...editData })
    }

    const onclick = () => {
        if (type === "add") {
            postTask(editData)
        }
        else {
            putTask(editData)
        }
    }


    return (
        <>
            <div className={classes.edit} >
                <textarea onChange={(e) => onChange(e)} value={editData.description}></textarea>
                <div className={classes.btn} onClick={() => { onclick() }}>
                    Send
                </div>
            </div>

        </>
    )
}


export default Edit