// src/data/tasks.ts
// src/data/tasks.ts
import type { TechTask } from '../interfaces/Task';

export const MOCK_TASKS: TechTask[] = [
    {
        id: '1001',
        title: 'Server Migration - Stockholm Hub',
        description: 'Migrate legacy DB to PostgreSQL.',
        status: 'In Progress',
        priority: 'High',
        createdAt: new Date('2026-03-01')
    },
    {
        id: '1002',
        title: 'Update Security Protocols',
        description: 'Implement OAuth2 for the main API.',
        status: 'Pending',
        priority: 'Medium',
        createdAt: new Date('2026-03-02')
    },
    {
        id: '1003',
        title: 'Fix UI Bug - Sidebar',
        description: 'Sidebar does not collapse on mobile.',
        status: 'Completed',
        priority: 'Low',
        createdAt: new Date('2026-02-28')
    }
];