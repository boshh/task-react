
import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context"

import Edit from "../Edit"

import classes from "./style.module.scss"

const Task = () => {
    const { taskList, setTaskList, deleteTask, putTask, isEdit, setIsEdit } = useContext(TaskContext)

    useEffect(() => {
    }, [])

    const onEdit = (index) => {
        taskList[index].isEdit = !taskList[index].isEdit
        setTaskList([...taskList])
    }
    const onComplete = (data) => {
        if (data.isFinish === 1) {
            return
        }
        data.isFinish = 1;
        putTask(data)
    }
    const onDelete = (data) => {
        deleteTask(data)
    }

    return (
        <div className={classes.box}>
            <div className={classes.addCard} onClick={() => setIsEdit(true)}>
                {!isEdit ?
                    <>
                        <div className={classes.col}></div>
                        <div className={classes.row}></div>
                    </>
                    :
                    <Edit type="add"></Edit>
                }
            </div>
            {taskList.map((data, index) => {
                return (
                    <div className={classes.card} key={index}>
                        {data.isEdit ?
                            <Edit data={data}></Edit> :
                            <div className={classes.cardContainer}>
                                <div className={classes.checkContainer}>
                                    <div className={classes.check} onClick={() => onComplete(data)}>
                                        {data.isFinish === 1 && <i class="pi pi-check" ></i>}
                                    </div>
                                </div>

                                <div className={classes.description}>
                                    <div>{data.description}</div>
                                </div>

                                <div className={classes.iconBar}>
                                    {/* {!data.isFinish && <>
                                        <div className={`${classes.btn} ${classes.mr5}`} onClick={() => onComplete(data)}>Complete</div>
                                        <div className={`${classes.btn} ${classes.mr5}`} onClick={() => onEdit(index)}>Edit</div>
                                    </>} */}

                                    <div className={classes.btn} onClick={() => onDelete(data)}><i class="pi pi-trash" ></i></div>
                                </div>

                            </div>

                        }
                    </div>

                )

            })}
        </div>
    )
}


export default Task