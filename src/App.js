// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Logo/>
      <BestPokemon/>
      <CaughtPokemon/>
    </div>

  );
}

function Logo(){
  return (
    <header>
        <h1>Welcome to the pokedex</h1>;
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
    </header>
  );
}


function BestPokemon(){
  const abilities = ["anticipation", "adapabiliity"];
  return (
		<div>
			<p> My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => (<li>{ability}</li>))}
        </ul>
		</div>
	);
}

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  return <p> Caught 0 Pokemon on {date}</p>;
};

export default App;
