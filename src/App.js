
import Header from "./components/Header";
import Layout from './components/Layout';

function App() {
  return (
    <div className="flex h-screen flex-col  bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
      <Header />
      <Layout />
    </div>
  );
}

export default App;
