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
  const updateTaskStatus = (taskId: string, newStatus: 'Pending' | 'In Progress' | 'Completed') => {
    const updatedTasks = tasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (taskId: string) => {
    // We create a new array excluding the task with the matching ID
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const completedCount = tasks.filter(t => t.status === 'Completed').length;
  const progressValue = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

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
      <div className="mb-4">
          <span className="text-sm text-600">Total Progress: {Math.round(progressValue)}%</span>
          <div className="w-full bg-blue-100 border-round h-1rem mt-1">
              <div 
                  className="bg-blue-600 h-full border-round transition-width transition-duration-500" 
                  style={{ width: `${progressValue}%` }} 
              />
          </div>
      </div>
      
    
      <TaskTable tasks={tasks} onDeleteTask={deleteTask} onUpdateStatus={updateTaskStatus} />

      <TaskDialog 
        visible={isDialogVisible} 
        onHide={() => setIsDialogVisible(false)} 
        onSave={addTask} 
      />
    </MainLayout>
  );
}

export default App;