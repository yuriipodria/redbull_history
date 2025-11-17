import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide";
import "./index.css";

function App() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <FirstSlide />

        <SecondSlide />
      </div>
    </>
  );
}

export default App;
