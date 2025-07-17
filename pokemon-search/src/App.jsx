import PokemonSearchResult from "./assets/PokemonSearchResult";
import PokemonSearchForm from "./PokemonSearchForm";

function App() {
  return (
    <div className="flex flex-col h-dvh">
      {/*Header*/}
      <PokemonSearchForm />
      {/*Card*/}
      <PokemonSearchResult />
    </div>
  );
}

export default App;
