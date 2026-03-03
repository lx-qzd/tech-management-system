import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="min-h-screen flex flex-column surface-ground">
            {/* TOP BAR */}
            <div className="surface-card p-3 shadow-2 flex justify-content-between align-items-center">
                <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="p-button-text" />
                <span className="text-xl font-bold text-blue-600">TechManager Pro</span>
                <i className="pi pi-user text-2xl" />
            </div>

            {/* SIDEBAR */}
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h3>Menu</h3>
                <ul className="list-none p-0 m-0">
                    <li className="mb-3">
                        <Button label="Dashboard" icon="pi pi-home" className="p-button-text w-full text-left" />
                    </li>
                    <li className="mb-3">
                        <Button label="Tasks" icon="pi pi-list" className="p-button-text w-full text-left" />
                    </li>
                </ul>
            </Sidebar>

            {/* MAIN CONTENT AREA */}
            <div className="p-4">
                {children}
            </div>
        </div>
    );
};