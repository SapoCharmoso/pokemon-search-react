import { useState } from "react";
import PokemonSearchResult from "./assets/PokemonSearchResult";
import PokemonSearchForm from "./PokemonSearchForm";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(name) {
    setPokemonName(name);
  }

  return (
    <div className="flex flex-col h-dvh">
      {/*Header*/}
      <PokemonSearchForm onSubmit={handleSubmit} />
      {/*Card*/}
      <PokemonSearchResult name={pokemonName} />
    </div>
  );
}

export default App;
