import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
export default function App() {
  return (
    <>
      <div className="w-full flex">
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Main Components */}
        <main className="grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}
