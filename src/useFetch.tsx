import { useEffect, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pokemonData, setPokemonData] = useState<any[]>([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=2&limit=2";

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
        setError(null);
        fetchPokemonDetails(data); // Call fetchPokemonDetails after setting data
      } catch (error:any) {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    const fetchPokemonDetails = async (data: any) => {
      if (data.results) {
        const newData = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const response = await fetch(pokemon.url);
            if (!response.ok) {
              throw new Error("Failed to fetch Pokémon details");
            }
            const pokemonDetail = await response.json();
            return pokemonDetail;
          })
        );
        setPokemonData(newData);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error, pokemonData };
}