import Diena from './Diena';
import './global.css';


function App(){
  const PirmdienasStundas = [
  "Krievu valoda",
  "Sociālās zinības un vēsture",
  "Sistēmu programmēšana",
  "Sistēmu programmēšana"
];
const OtrdienasStundas = [
  "Sociālās zinības un vēsture",
	"Dabaszinības",
	"Matemātika",
	"Sports"
];
const TrešdienasStundas = [
  "Datorsistēmas un datortīkli",
  "Datorsistēmas un datortīkli",
  "Sistēmu programmēšana",
  "Sistēmu programmēšana"
];
const CeturtienaStundas = [
  "Sistēmu programmēšana",
	"Matemātika",
	"Latviešu valoda un literatūra",
	"Valodas, kultūras izpratne un izpausmes A"
];
const PiektdienaStundas = [
  "Angļu valoda",
  "Sociālās zinības un vēsture"
];


  return (
    <>
  <Diena nosaukums = "Pirmdiena" stundas={PirmdienasStundas}/>
  <Diena nosaukums = "Otrdiena" stundas={OtrdienasStundas}/>
  <Diena nosaukums = "Trešdiena" stundas={TrešdienasStundas}/>
  <Diena nosaukums = "Ceturtdiena" stundas={CeturtienaStundas}/>
  <Diena nosaukums = "Piektdiena" stundas={PiektdienaStundas}/>
  </>
  );
}

export default App;
