import { LeftSide, RightSide } from "./components";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10 overflow-hidden">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default App;

