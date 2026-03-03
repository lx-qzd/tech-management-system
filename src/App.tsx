import { MainLayout } from './components/MainLayout';
import { TaskTable } from './components/TaskTable';

function App() {
  return (
    <MainLayout>
      <div className="grid">
        <div className="col-12">
          <TaskTable />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;