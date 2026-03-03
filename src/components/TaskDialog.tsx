import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import type { TechTask } from '../interfaces/Task';

interface TaskDialogProps {
    visible: boolean;
    onHide: () => void;
    onSave: (task: TechTask) => void;
}

export const TaskDialog: React.FC<TaskDialogProps> = ({ visible, onHide, onSave }) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

    const priorities = ['Low', 'Medium', 'High'];

    const handleSubmit = () => {
        const newTask: TechTask = {
            id: Math.floor(Math.random() * 10000).toString(),
            title,
            description: '', // Simplified for now
            status: 'Pending',
            priority,
            createdAt: new Date()
        };
        onSave(newTask);
        setTitle(''); // Reset form
    };

    const footer = (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={onHide} className="p-button-text" />
            <Button label="Create" icon="pi pi-check" onClick={handleSubmit} autoFocus />
        </div>
    );

    return (
        <Dialog header="Create New Technical Ticket" visible={visible} style={{ width: '30vw' }} footer={footer} onHide={onHide}>
            <div className="flex flex-column gap-3 mt-2">
                <div className="flex flex-column gap-2">
                    <label htmlFor="title">Task Title</label>
                    <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Server Maintenance" />
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="priority">Priority Level</label>
                    <Dropdown value={priority} options={priorities} onChange={(e) => setPriority(e.value)} placeholder="Select Priority" />
                </div>
            </div>
        </Dialog>
    );
};