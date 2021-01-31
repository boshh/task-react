import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Calendar } from "primereact/calendar";

import { Observable, from } from 'rxjs';

import { getTasks, postTasks, putTasks, deleteTasks } from '../../request/api.js'

import classes from "./style.module.scss"


const Editor = (props) => {
    const { saveEdit } = props;
  
    const [date, setDate] = useState(new Date())
    const [comment, setComment] = useState("")
    const [status, setStatus] = useState(false)
  
    // const onChange = date => {
    //   setDate(date)
    // };
  
    const handleChange = event => {
      setComment(event.target.value)
    };
  
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col
            xs
            lg="6"
            className=" mt-5"
            style={{ backgroundColor: "DarkCyan" }}
            onClick={() => setStatus(!status)}
          >
            <div
              className="col-lg-12 col text-center p-3"
              style={{ fontSize: "20px", color: "white" }}
            >
              <i className="pi pi-plus">ADD A NEW TASK</i>
            </div>
          </Col>
        </Row>
        <Row
          className={status ? "justify-content-md-center" : "d-none"}
        >
          <Col xs lg="6" className="border pt-3 pb-3">
            <div className="mt-2">
              <div className="col-lg-4 col float-left">
                <i className="pi pi-calendar"> DeadLine</i>
              </div>
              <div className="col-lg-8 col float-left">
                <Calendar
                  inputStyle={{ width: "100%" }}
                  value={date}
                  onChange={e => setDate(e.value)}
                ></Calendar>
              </div>
              <div className="col-lg-4 col mt-3 float-left">
                <i className="pi pi-pencil"> Comment</i>
              </div>
              <div className="col-lg-8 col mt-3 float-left">
                <textarea
                  style={{ width: "100%" }}
                  defaultValue={comment}
                  onChange={() => handleChange()}
                ></textarea>
              </div>
            </div>
            {/* <div></div> */}
          </Col>
        </Row>
        <Row
          className={status ? "justify-content-md-center" : "d-none"}
        >
          <Col xs lg="6" style={{ padding: "0" }}>
            <div className="col-lg-6 col float-left text-center border border-top-0 p-2">
              <i className="pi pi-times">CANCEL</i>
            </div>
            <div
              className="col-lg-6 col float-left text-center border-left border border-top-0 border-left-0 border-color p-2"
              style={{ backgroundColor: "DarkCyan" }}
              onClick={() => {
                saveEdit();
              }}
            >
              <i className="pi pi-plus">ADD A NEW TASK</i>
            </div>
          </Col>
        </Row>
      </div >
    );
  
  }
  
  

export default Editor