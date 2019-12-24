import React from "react";
import { Highlight } from "react-instantsearch-dom";
import { lighten, saturate } from "polished";

import Link from "next/link";
import { Tag } from "../Tag";
import { TypeBadgeAlgolia } from "../TypeBadgeAlgolia";

const COLORS_BY_TYPE = {
  poison: "#a59",
  grass: "#7c5",
  fire: "#f42",
  flying: "#89f",
  water: "#39f",
  electric: "#fc3",
  dragon: "#76e",
  ice: "#6cf",
  fighting: "#b54",
  rock: "#ba6",
  ground: "#db5",
  psychic: "#f59",
  bug: "#ab2",
  dark: "#754",
  steel: "#aab",
  fairy: "#e9e",
  ghost: "#66b",
  normal: "#aa9"
};

export const PokemonHit = ({ pokemon }) => {
  const color = COLORS_BY_TYPE[pokemon.types[0].name.en.toLowerCase()];

  return (
    <div
      style={{
        borderColor: lighten(0.2, saturate(0.25, color)),
        background: lighten(0.4, color)
      }}
    >
      <Link href={`pokemon/${pokemon.nationalId}`}>
        <a>
          <h3>
            <Highlight tagName="mark" attribute="name.en" hit={pokemon} />
          </h3>
          <img src={pokemon.artworkUrl} alt={pokemon.name.en} />

          <p className="watermark-number">#{pokemon.id}</p>

          <ul>
            {pokemon.types.map(type => (
              <li key={type.name.en}>
                <TypeBadgeAlgolia type={type.name.en} />
              </li>
            ))}
          </ul>

          <p>
            <Highlight tagName="mark" attribute="name.fr" hit={pokemon} />{" "}
            <Tag>
              <span>fr</span>
            </Tag>
            {pokemon.name.ja && (
              <>
                {" "}
                / <Highlight
                  tagName="mark"
                  attribute="name.ja"
                  hit={pokemon}
                />{" "}
                <Tag>
                  <span>ja</span>
                </Tag>
              </>
            )}
          </p>
        </a>
      </Link>

      <style jsx>{`
        div {
          display: block;
          border-radius: 2px;
          border-left: 4px solid;
          background: #fff;
          box-sizing: border-box;
          position: relative;
        }

        a {
          padding: 20px;
          text-decoration: none;
          color: inherit;
          display: grid;
          grid-template-columns: 1fr 150px;
          grid-template-rows: repeat(3, auto);
          align-items: center;
        }

        a:hover .watermark-number,
        a:focus .watermark-number {
          opacity: 0.7;
        }

        a:hover img,
        a:focus img {
          transform: scale(1.25);
        }

        img {
          position: relative;
          z-index: 1;
          height: 150px;
          grid-row: span 3;
          transition: transform 0.3s ease;
        }

        h3 {
          font-weight: bold;
          font-size: 2rem;
        }

        p {
          font-size: 1.4rem;
          opacity: 0.75;
        }

        ul {
          display: flex;
        }

        li + li {
          margin-left: 4px;
        }

        .watermark-number {
          position: absolute;
          top: 10px;
          right: 10px;
          font-weight: bold;
          font-size: 4rem;
          opacity: 0.3;
          transition: opacity 0.2s ease;
        }
      `}</style>
    </div>
  );
};