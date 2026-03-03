import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import type { TechTask } from '../interfaces/Task';
import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog';
// import { MOCK_TASKS } from '../data/tasks';

interface TaskTableProps {
  tasks: TechTask[];
  onDeleteTask: (id: string) => void;
}

export const TaskTable: React.FC<TaskTableProps> = ({ tasks, onDeleteTask }) => {
    
    // Action Template for the Delete Button
    const confirmDelete = (task: TechTask) => {
        confirmDialog({
            message: 'Are you sure you want to delete this ticket?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Yes',
            rejectLabel: 'No',
            acceptClassName: 'p-button-danger',
            accept: () => onDeleteTask(task.id)
        });
    };
    const actionBodyTemplate = (task: TechTask) => {
        return (
            <Button 
                icon="pi pi-trash" 
                rounded 
                outlined 
                severity="danger" 
                onClick={() => confirmDelete(task)} 
                tooltip="Delete Ticket"
                tooltipOptions={{ position: 'bottom' }}
            />
        );
    };

    // Status Badge Template
    const statusBodyTemplate = (task: TechTask) => {
        const severity = task.status === 'Completed' ? 'success' : task.status === 'In Progress' ? 'info' : 'warning';
        return <Tag value={task.status} severity={severity} />;
    };

    // Priority Template (Using custom Blue shades)
    const priorityBodyTemplate = (task: TechTask) => {
        const color = task.priority === 'High' ? 'bg-blue-800' : task.priority === 'Medium' ? 'bg-blue-500' : 'bg-blue-200';
        return <span className={`${color} text-white px-2 py-1 border-round text-xs font-bold`}>{task.priority}</span>;
    };

    return (
        <div className="card shadow-2 border-round surface-card p-4">
            <h3 className="m-0 mb-4 text-blue-700">System Technical Tickets</h3>
            <DataTable value={tasks} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="ID" sortable></Column>
                <Column field="title" header="Task Title" sortable></Column>
                <Column header="Status" body={statusBodyTemplate} sortable></Column>
                <Column header="Priority" body={priorityBodyTemplate} sortable></Column>
                <Column field="createdAt" header="Date Created" body={(rowData) => rowData.createdAt.toLocaleDateString()} sortable></Column>
                <Column header="Actions" body={actionBodyTemplate}></Column>
            </DataTable>
        </div>
    );
};