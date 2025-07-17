function PokemonSearchForm() {
  return (
    <div className="mx-10 my-2 rounded bg-red-900 text-center h-48 p-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">Pokemon Search</h1>
      <form className="" action="">
        <div id="" className="grid gap-3">
          <label className="text-1xl md:text-2xl lg:text-3xl" htmlFor="">
            Type your pokemon
          </label>
          <input
            className="bg-white placeholder-gray-400 p-4 focus:outline-0 rounded h-10 sm:w-full md:w-1/2 md:mx-auto"
            placeholder="Pesquise aqui"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}

export default PokemonSearchForm;
