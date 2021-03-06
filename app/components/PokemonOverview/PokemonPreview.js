import React from "react";
import { useShiny } from "../ShinyMode";

export const PokemonPreview = ({ pokemon }) => {
  const spriteUrl = useShiny(pokemon.spriteUrl, pokemon.spriteShinyUrl);

  return (
    <a href={`/pokemon/${pokemon.id}`}>
      <style jsx>{`
        a {
          display: inline-block;
          padding: 20px;
          text-align: center;
          color: inherit;
          text-decoration: none;
        }

        img {
          max-width: 100px;
        }
      `}</style>

      <img src={spriteUrl} />
      <p>{pokemon.names.en}</p>
    </a>
  );
};
