import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="card shadow-1 p-4 surface-card border-round">
        <h2>Welcome to the System</h2>
        <p>This is where your IT management modules will live.</p>
      </div>
    </MainLayout>
  );
}

export default App;