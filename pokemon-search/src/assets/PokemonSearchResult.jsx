import { useEffect, useRef, useState } from "react";

function PokemonSearchResult({ name }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);
  const scrollContainerRef = useRef(null);

  async function fetchPokemon() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`
      );

      const data = await response.json();

      const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      });

      const fullData = await Promise.all(promises);
      setPokemonData(...[fullData]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  useEffect(() => {
    async function fetchPokemonByName() {
      setLoading(true);
      setError("");
      setPokemonData([]);

      if (name !== "") {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
          );

          console.log("Testando a resposta: ", response);

          if (!response.ok) throw new Error("Pokemon Não encontrado");

          const data = await response.json();

          setPokemonData([data]);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else if (name === "") {
        fetchPokemon();
        setOffset(0);
      }
    }

    fetchPokemonByName();
  }, [name]);

  function handleScroll() {
    const container = scrollContainerRef.current;
    if (!container || loading) return;

    const scrolTop = container.scrollTop;
    const scrolHeight = container.offsetHeight;
    const clientHeight = container.scrollHeight;
    const halfClientHeight = clientHeight / 1.2;

    const isBottom = Math.ceil(scrolTop) + scrolHeight >= halfClientHeight;

    if (isBottom) {
      setOffset((prevOffset) => prevOffset + 20);
    }
  }

  return (
    <div
      ref={scrollContainerRef}
      className="m-10 rounded h-full bg-red-900 p-2 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 gap-8 overflow-auto"
      onScroll={handleScroll}
    >
      {loading && (
        <p className="p-6 mt-6 col-span-5 text-white">Carregando...</p>
      )}
      {error && (
        <p className="p-6 mt-6 col-span-5 text-white">
          Pokemon não encontrado ou não existe...
        </p>
      )}

      {pokemonData &&
        pokemonData.map((pokemon) => (
          <div
            key={!pokemon.id ? "Não encontrado" : pokemon.id}
            className="p-4"
          >
            <div className="bg-white rounded mx-auto aspect-square">
              <img
                className="h-full mx-auto"
                src={!pokemon.sprites ? "" : pokemon.sprites.front_default}
                alt=""
              />
            </div>
            <div className="text-white">
              <p className="">
                #
                {!pokemon.id
                  ? "Não encontrado"
                  : pokemon.id.toString().padStart(4, "0")}
              </p>
              <p className="capitalize text-[24px]">
                {!pokemon.name ? "Não encontrado" : pokemon.name}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PokemonSearchResult;
