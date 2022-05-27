// Components
import React, { useState } from "react";
import './TaskInformation';
// import TaskInformation from "./TaskInformation";
// styles
import '../Styles/TaskList.css';

const TaskList = (props) => {
    const [enteredData, setEnteredData] = useState('');

    const addTaskHandler = (event) =>{
        event.preventDefault();
        
        if(enteredData.trim().length === 0){
            return (alert('Please Enter Something ...'));
        }
        props.onAddTask(enteredData);
        // alert(enteredData);
        setEnteredData('');
    }

    const dataChangeHandler = (event) => {
        setEnteredData(event.target.value);
    }

    return (
        <React.Fragment >
            <button className="add_btn" type="button" data-toggle="modal" data-target="#exampleModal">
                ADD TASK
            </button><br /><br />

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please Add your task below</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <textarea id="txt_area" rows="4" cols="50" value={enteredData} placeholder="Please type here..." onChange={dataChangeHandler}></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="add_btn" data-dismiss="modal">Close</button>
                            <button type="button" class="add_btn" data-dismiss="modal" onClick={addTaskHandler}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="task_list">
                {/* <div className="task">{enteredData}</div>
                <div className="task"></div>
                <div className="task"></div> */}
                {/* <TaskInformation tasks={information} /> */}
            </div>
        </React.Fragment>
    );
}
export default TaskList;