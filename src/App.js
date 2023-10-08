import Diena from './Diena';
import './global.css';


function App(){

//katrai dienai ir stundas un dienasNosaukums
  const NedelasStundas = [
    {
    diena: "Pirmdiena",
      stundas: [
        "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana"
    ]},
    {
    diena: "Otrdiena",
      stundas: [ 
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana"
    ]},

      {
    diena: "Tresdiena",
      stundas: [  
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana"
      ]},
      {
    diena: "Ceturtdiena",
      stundas: [  
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana"
    ]},
    {
    diena: "Piektdiena",
      stundas: [  
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana",
      "Sistēmu programmēšana"
    ]},
]




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
