import { React } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  // var marksCanvas = document.getElementById("marksChart");

  // Chart.defaults.global.defaultFontFamily = "Lato";
  // Chart.defaults.global.defaultFontSize = 18;

  // var marksData = {
  //   labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  //   datasets: [
  //     {
  //       label: "Student A",
  //       backgroundColor: "transparent",
  //       borderColor: "rgba(200,0,0,0.6)",
  //       fill: false,
  //       radius: 6,
  //       pointRadius: 6,
  //       pointBorderWidth: 3,
  //       pointBackgroundColor: "orange",
  //       pointBorderColor: "rgba(200,0,0,0.6)",
  //       pointHoverRadius: 10,
  //       data: [65, 75, 70, 80, 60, 80],
  //     },
  //     {
  //       label: "Student B",
  //       backgroundColor: "transparent",
  //       borderColor: "rgba(0,0,200,0.6)",
  //       fill: false,
  //       radius: 6,
  //       pointRadius: 6,
  //       pointBorderWidth: 3,
  //       pointBackgroundColor: "cornflowerblue",
  //       pointBorderColor: "rgba(0,0,200,0.6)",
  //       pointHoverRadius: 10,
  //       data: [54, 65, 60, 70, 70, 75],
  //     },
  //   ],
  // };

  // var chartOptions = {
  //   scale: {
  //     ticks: {
  //       beginAtZero: true,
  //       min: 0,
  //       max: 100,
  //       stepSize: 20,
  //     },
  //     pointLabels: {
  //       fontSize: 18,
  //     },
  //   },
  //   legend: {
  //     position: "left",
  //   },
  // };

  // var radarChart = new Chart(marksCanvas, {
  //   type: "radar",
  //   data: marksData,
  //   options: chartOptions,
  // });

  const { id } = useParams();

  let pokemon = useSelector((store) => {
    return store.existingPokemons;
  });
  // esto no me acuerdo para qué era:
  // let pokemon2 = useSelector((store) => {
  //   return store.filteredPokemons;
  // });
  // if (pokemon2) {
  //   pokemon = pokemon.concat(pokemon2);
  // }

  pokemon = pokemon.find((p) => p.id == id);

  if (!pokemon) {
    return <div className="error">Pokemon no encontrado</div>;
  }
  //console.log(pokemon);
  return (
    <div id="detailContainer" className="container">
      <div key={pokemon.id} id="detailcard" className="pokemon">
        <div>
          <h3>{pokemon.name}</h3>
          <div className="pokemonImage">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="mapTypes">
            {pokemon.types.map((t) => {
              return <h4 key={pokemon.types.indexOf(t) + 1}>{t}</h4>;
            })}
          </div>
        </div>
        <div>
          {/* <canvas id="marksChart" width="600" height="400"></canvas> */}
          <h5>Life: {pokemon.hp}</h5>
          <h5>Strength: {pokemon.strength}</h5>
          <h5>defense: {pokemon.defense}</h5>
          <h5>speed: {pokemon.speed}</h5>
          <h5>height: {pokemon.height}</h5>
          <h5>weight: {pokemon.weight}</h5>
        </div>
      </div>
    </div>
  );
};

export default Detail;
