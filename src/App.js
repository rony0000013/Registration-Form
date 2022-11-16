import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="flex h-full md:h-screen flex-col bg-indigo-200 ">
      <Header />
      <div className=" h-full  flex flex-col md:grid md:grid-cols-12 overflow-y-hidden ">
        <div className="flex  md:items-center justify-center  py-8 md:py-2 md:px-10 md:col-span-4   ">
          <RegistrationForm />

        </div>
        <div className=" flex flex-col items-center justify-center  gap-y-6 px-4 pt-10 pb-6 md:col-span-8 md:px-6 md:pt-10 md:pb-10 md:justify-items-center custom-scroll md:gap-6 md:border-l-[6px] md:border-indigo-500  md:overflow-y-scroll md:grid md:grid-cols-2  ">
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          
        </div>
      </div>
    </div>
  );
}

export default App;
