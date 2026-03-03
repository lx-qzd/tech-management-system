import { useState } from 'react';
import { MainLayout } from './components/MainLayout';
import { TaskTable } from './components/TaskTable';
import type { TechTask } from './interfaces/Task';
import { MOCK_TASKS } from './data/tasks';
import { Button } from 'primereact/button';
import { TaskDialog } from './components/TaskDialog';
function App() {
  const [tasks, setTasks] = useState<TechTask[]>(MOCK_TASKS);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const addTask = (newTask: TechTask) => {
    setTasks([...tasks, newTask]);
    setIsDialogVisible(false);
  };

  const deleteTask = (taskId: string) => {
    // We create a new array excluding the task with the matching ID
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
};

  return (
    <MainLayout>
      <div className="flex justify-content-between align-items-center mb-4">
        <h2 className="text-blue-800">IT Operations Dashboard</h2>
        <Button 
            label="New Ticket" 
            icon="pi pi-plus" 
            className="p-button-raised p-button-info" 
            onClick={() => setIsDialogVisible(true)} 
        />
      </div>

      <TaskTable tasks={tasks} onDeleteTask={deleteTask} />

      <TaskDialog 
        visible={isDialogVisible} 
        onHide={() => setIsDialogVisible(false)} 
        onSave={addTask} 
      />
    </MainLayout>
  );
}

export default App;