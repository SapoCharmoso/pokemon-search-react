import { useState } from "react";

function PokemonSearchForm(props) {
  const [pokemon, setPokemon] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (pokemon === "") return;

    props.onSubmit(pokemon);
    setPokemon("");
  }

  return (
    <div className="mx-10 my-2 rounded bg-red-900 text-center h-auto p-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">Pokemon Search</h1>
      <form onSubmit={handleSubmit} className="" action="">
        <div id="" className="grid gap-3">
          <label className="text-1xl md:text-2xl lg:text-3xl" htmlFor="">
            Type your pokemon
          </label>
          {/*Fazer com que: o Search retorne o nome pro App.jsx
           e dentro do App ele faça a requisição pra API e retorne os dados
           pro Componente Resultado,
          onde posso popular com o map todos os pokemons ou só um pokemon*/}
          <input
            onChange={(e) => setPokemon(e.target.value)}
            className="bg-white placeholder-gray-400 p-2 focus:outline-0 rounded-3xl sm:w-full md:w-1/2 md:mx-auto"
            placeholder="Pesquise aqui"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}

export default PokemonSearchForm;
