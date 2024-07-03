import "./App.css";
import ImageSlider from "./Components/image-slider";

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"20"}
        page={"2"}
      />
    </div>
  );
}

export default App;
