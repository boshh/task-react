//react
import React, { useState, createContext, useEffect, useRef, useCallback, useContext } from 'react';

import { from } from 'rxjs';
import { map } from 'rxjs/operators'

import { getTasks, postTasks, putTasks, deleteTasks } from '../request/api.js'


export const TaskContext = createContext();
export const WithTaskProvider = WrappedComponent => {


    const TaskProvider = props => {
        const [taskList, setTaskList] = useState([]);
        const [isContextLoading, setIsContextLoading] = useState(true);

        const [isEdit, setIsEdit] = useState(false);

        const getTastLists = () => {
            from(getTasks())
                .pipe(
                    map((data) => {
                        data.result = data.result.map((d) => {
                            d.isEdit = false
                            return d
                        })
                        return data
                    })

                ).subscribe(res => {
                    setTaskList(res.result)
                    setIsContextLoading(false)
                })
        }

        const postTask=(data)=>{
            from(postTasks(data)).subscribe(res => {
                setTaskList(res.result)
                setIsEdit(false)
                setIsContextLoading(false)
            })
        }

        const putTask = (data) => {
            from(putTasks(data)).subscribe(res => {
                setTaskList(res.result)
                setIsContextLoading(false)
            })
        }


        const deleteTask = (data) => {
            from(deleteTasks(data)).subscribe(res => {
                setTaskList(res.result)
                setIsContextLoading(false)
            })
        }

        useEffect(() => [
            getTastLists()
        ], [])

        const value = {
            taskList,
            setTaskList,
            isContextLoading,
            getTastLists,
            putTask,
            deleteTask,
            postTask,
            isEdit,
            setIsEdit
        }


        return (
            <TaskContext.Provider value={value}>
                {props.children}
            </TaskContext.Provider>
        );

    }

    return TaskProvider(WrappedComponent)
};

