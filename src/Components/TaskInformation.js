//components
import React, {useState} from 'react';
// style
import '../Styles/TaskInformation.css';

const TaskInformation = (props,editprops,deleteprops) => {
    const [deleteInfo, setDeleteInfo] = useState('');
    const [editInfo, setEditInfo] = useState([]);

    const editTaskHandler = (editprops)=>{
        alert('EDIT  ???');
        editprops.onEditTask(editInfo);
        setEditInfo('');
    }
    
    const deleteTaskHandler = (deleteprops)=>{
        alert('DELETE  ???');

        // const updateditems = props.entereData.filter(task ,id) ={
        //     return id !== props;
        // }
        deleteprops.onDeleteTask(deleteInfo);
        setDeleteInfo('');
    }

    return (
        <ul className='data_ul'>
            {props.tasks.map((task) => (
                <div className="task_list">
                    <div className="task">
                        <div className='info_header'>
                            <button className='edit_btn' onClick={editTaskHandler}>Edit</button>
                            {/* <button className='delete_btn' onClick={()=>deleteTaskHandler}>Delete</button> */}
                            <button className='delete_btn' onClick={deleteTaskHandler}>Delete</button>
                        </div><hr />
                        <li className='data_li' key={task.id}>
                            {task.data}
                        </li>
                    </div>
                </div>
            ))}
        </ul>
    );
};
export default TaskInformation;