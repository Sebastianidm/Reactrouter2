

export default function PokemonCard({ pokemon }) {
  const { name, stats, src, types } = pokemon;
  return (
    <div className=" mt-10 ml-10  pl-10 flex flex-col content-center items-center">
      <img height="300" variant="top" src={src} />
      <div >
        <h2 className=" text-xl font-sans font-semibold">{name}</h2>
        <ul className="text-l  ">
          <p>
            {stats?.map((stat, i) => (
              <li key={i}>
                {stat.name}: {stat.base}
              </li>
            ))}
          </p>
        </ul>
        <p className="text-secondary">{types}</p>
      </div>
    </div>
  );
}