import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";

import { Calendar } from "primereact/calendar";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { WithTaskProvider, TaskContext } from './context';


import Task from "./components/Task"
import Editor from "./components/Editor"
import Complete from "./components/Complete"
import Progress from "./components/Progress"

import { Observable, from } from 'rxjs';

const App = () => {
  return (
    <WithTaskProvider>
      <Main></Main>
    </WithTaskProvider>
  );
}

const Main = () => {
  const { isContextLoading } = useContext(TaskContext)
  const [action, setAction] = useState(0);
  const [data, setData] = useState("1")

  const GoTo = (action) => {
    setAction(action)
  }

  const saveEdit = () => {
    setData("test134455t8t")
  }
  const content = () => {
    switch (action) {
      case 1:
        return <Progress></Progress>;
      case 2:
        return <Complete></Complete>;
      default:
        return <Task></Task>;
    }
  }
  const style = { fontSize: "25px", textAlign: "center", padding: "10px 0" };

  return (
    <div>
      {!isContextLoading &&
        <>
          <div style={{ backgroundColor: "#00AEAE" }}>
            <Row className="justify-content-md-center">
              <Col
                xs
                lg="2"
                style={style}
                className={action === 0 ? "active" : "unactive"}
                onClick={() => GoTo(0)}
              >
                My Tasks
        </Col>
              <Col
                xs
                lg="2"
                style={style}
                className={action === 1 ? "active" : "unactive"}
                onClick={() => GoTo(1)}
              >
                In Progress
        </Col>
              <Col
                xs
                lg="2"
                style={style}
                className={action === 2 ? "active" : "unactive"}
                onClick={() => GoTo(2)}
              >
                Completed
        </Col>
            </Row>
          </div>

          {/* <div>
            <Editor saveEdit={() => saveEdit()}></Editor>
          </div> */}
          {content()}
        </>
      }

    </div>
  )
}




export default App;
