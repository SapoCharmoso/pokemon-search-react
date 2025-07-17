function PokemonSearchResult() {
  return (
    <div className="m-10 rounded h-full bg-red-900 p-2 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 gap-8 overflow-auto">
      <div className="p-6">
        <div className="bg-white rounded mx-auto aspect-square">
          <img className="h-full p-6 mx-auto" src="/public/vite.svg" alt="" />
        </div>
        <div className="">
          <p className="">#0001</p>
          <p className="">Vite Logo</p>
          {/*Alterar o tamanho do nome do pokemon e colocar os tipos em baixo do nome dele*/}
        </div>
      </div>
    </div>
  );
}

export default PokemonSearchResult;
