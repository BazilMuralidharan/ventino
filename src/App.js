import ContentAnimation from "./components/Content/ContentAnimation";
import MainContent from "./components/Content/MainContent";
import Header from "./components/Header/Header";
import '../src/App.css'
function App() {
  return (
    <div className="App">
      {/* <ContentAnimation/> */}
      <Header/>
      <div className="MainContext">
        <MainContent/>

      </div>
    </div>
  );
}

export default App;
