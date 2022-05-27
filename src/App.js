// components
import React, {useState} from 'react';
import TaskInformation from './Components/TaskInformation';
import TaskList from './Components/TaskList';

// style
import './Styles/App.css';

const App = ()=>{
  const [information, setInformation] = useState([]);
  ////////////////////////////////////////////////
  const [editInfo, setEditInfo] = useState([]);
  const [deleteInfo, setDeleteInfo] = useState([]);
  
  const editInformationHandler = (data) =>{
     information.filter((data, id) => {
           return id !== data;
        })
    setEditInfo((prevUserList)=>{
      if(prevUserList.data.id !== data.id){
        return [{data:data, id: Math.random().toString()}]
      }
    });
    alert('its again');
  };

  const deleteInformationHandler = (data) =>{
    setDeleteInfo((prevUserList)=>{
      if(prevUserList.data.id !== data.id){
        return [{data:data, id: Math.random().toString()}]
      }
    });
    alert('its again');
  };
  ////////////////////////////////////////////////
  const addInformationHandler= (data) => {
    setInformation((prevUserList)=>{
      return [...prevUserList, {data:data, id: Math.random().toString()}]
    });
  }

  return(
  <>
    <h1 className="title">TO DO LIST</h1>
    <TaskList onAddTask={addInformationHandler}/>
    {/* <div className="task_list">
      <div className="task"> */}
        <TaskInformation  
          tasks={information} 
          edit={editInfo} 
          delete={deleteInfo} 
          onEditTask={editInformationHandler} 
          onDeleteTask={deleteInformationHandler} />
      {/* </div>
    </div> */}
  </>
  );
}
export default App;