import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState, userState} from 'react';

function App() {

  //usando hook de estado
   //nombre y fun wue cambia el estado - definicion donde especifico si es null o si tiene algo
  const [servicios, agregarServicio]=useState(
    [//lista
      {id:1, nombre:"cartelera", precio:23432 },//cada elemento
      {id:2, nombre:"pochoclos", precio:32 }
    ]

    //aca deberia hacer la fun agregarServicio
  );
  return (
    <div>
      <Header/>
      <h1>Cine fraldi</h1>
      {servicios.map(servicio=>(
        <p>{servicio.id} | {servicio.nombre}</p>
      ))}
      <Footer
        redSocial={"facebook"}//puedo pasarle una var, int, etc
      />
    </div>
  );
}

export default App;
