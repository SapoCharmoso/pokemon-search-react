import { useState } from "react";

function PokemonSearchForm(props) {
  const [pokemon, setPokemon] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(pokemon.toLowerCase());
    setPokemon("");
  }

  return (
    <div className="text-white mx-10 my-2 rounded bg-red-900 text-center h-auto p-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">Buscar Pokemon</h1>
      <form onSubmit={handleSubmit} className="" action="">
        <div id="" className="grid gap-3">
          <label className="text-1xl md:text-2xl lg:text-3xl" htmlFor="">
            Digite o nome do seu Pokemon
          </label>
          <input
            onChange={(e) => setPokemon(e.target.value)}
            className="bg-white text-black placeholder-gray-400 p-2 focus:outline-0 rounded-3xl sm:w-full md:w-1/2 md:mx-auto"
            placeholder="Pesquise aqui"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}

export default PokemonSearchForm;
