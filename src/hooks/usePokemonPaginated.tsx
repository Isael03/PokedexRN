import React, {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterface';

export default function usePokemonPaginated() {
  const [simplePokemnList, setSimplePokemnList] = useState<SimplePokemon[]>([]);

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  useEffect(() => {
    loadPokemons();
  }, []);

  async function loadPokemons() {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  }

  function mapPokemonList(pokemonList: Result[]) {
    pokemonList.map(poke => console.log(poke.url));
  }

  return {simplePokemnList};
}
