function App() {
  return (
    <>
      <div className="m-10 rounded bg-red-900 h-48 text-center p-4">
        <h1 className="text-5xl">Pokemon Search</h1>
        <form className="" action="">
          <div id="form-row" className="grid gap-3">
            <label className="text-2xl" htmlFor="">
              Type your pokemon
            </label>
            <input
              className="bg-white placeholder-gray-400 rounded h-10"
              placeholder="Pesquise aqui"
              type="text"
            />
          </div>
        </form>
      </div>
      <div className="m-10 rounded bg-red-900 h-96 p-2 grid grid-cols-8 gap-8">
        <div>
          <div className="h-40 w-40 text-amber-950 bg-white rounded">
            <img className="h-30 w-30" src="/public/vite.svg" alt="" />
          </div>
          <div className="">
            <p className="text-sm">#0001</p>
            <h1 className="">Vite Logo</h1>{" "}
            {/*Alterar o tamanho do nome do pokemon e colocar os tipos em baixo do nome dele*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
