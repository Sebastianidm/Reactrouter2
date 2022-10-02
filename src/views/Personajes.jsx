import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {       

    const [pokemones, setPokemones] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState("");
    const navigate = useNavigate();

    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=802&offset=0';
   
    const getPokemones = async() => {
      console.log(url);
      const res = await fetch(url);
      const {results} = await res.json();

      setPokemones(results);
    };

    const irPokemonDetalle = async() => {
      if (pokemonSelected) navigate(`/pokemones/${pokemonSelected}`);
      else alert("Debe seleccionar un pokemon");
  };

  useEffect(() => {
    getPokemones();
  }, []);


  return (
    <>
    <div className="mt-5 text-center flex flex-col content-center items-center">
      <h1 className="text-xl font-sans font-semibold">Selecciona tu pokemon Favorito</h1>
      <div className="col-5 col-sm-3  col-lg-2 mx-auto ">
        <select
          value={pokemonSelected}
          className="mt-3 text-sm text-slate-500 w-40 "
          onChange={(e) => setPokemonSelected(e.target.value)}
        >
          <option value="" disabled>
            Pokemones
          </option>
          {pokemones.map(({ name }, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <br />
        <button 
        onClick={irPokemonDetalle} 
        className=" w-40 p-2 mt-4  border-solid rounded-full  border-2  text-slate-50 border-white  bg-red-600 shadow-lg shadow-red-600">
            Ver Detalle 
        </button>
      </div>
    </div>
  </>    
  )
}