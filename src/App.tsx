import "./App.css";
import Navbar from "./components/Navbar";
import LocationShowcase from "./components/Navbar/NavLocation";
import RelationFactor from "./routes/RelationFactor";

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-28 p-4">
        <LocationShowcase
          locations={["Flashcard", "Mathematics", "Relation and Function"]}
        />
        <RelationFactor />
      </main>
    </>
  );
}

export default App;
