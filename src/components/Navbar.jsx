import {NavLink} from "react-router-dom";

const Navbar = () => {
    const setActiveClass = ({isActive}) => (isActive ? "active" : "noActivo");
  return (
    <div className=" bg-red-600 pr-12 p-5 flex justify-between ">
      <div className="w-90 p-1 ml-10">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" 
        alt="pokemon" />
      </div>
      <div className="flex gap-5 m-5 text-xl">
        <ul><NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/">Home</NavLink></ul>
        <ul><NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/pokemones"> {" "}Pokemones{" "}</NavLink></ul>
      </div>
    </div>
  )
}

export default Navbar

