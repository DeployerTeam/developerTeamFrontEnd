import React from 'react';
import Pets from './Pets';

export default class PetsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const pets= [
      {name: "Luke", image:"https://perritos882.files.wordpress.com/2016/12/cropped-imagenes-de-perritos-11.jpg"},
      {name: "Rex", image:"https://pm1.narvii.com/7034/1130dd3ce1ed3bcaa2cf2dd16921dbd2e6664efdr1-720-287v2_uhq.jpg"},
      {name: "Haku", image:"https://www.petdarling.com/articulos/wp-content/uploads/2014/10/perritos-aprenden-primera-vez-video.png?width=1200&enable=upscale"},
      {name: "Bolt", image:"https://sumedico.blob.core.windows.net.optimalcdn.com/images/2020/05/13/cuidadosperrosschnauzer-focus-min0.03-0.46-983-557.jpg"},
      {name: "Bolt", image:"https://sumedico.blob.core.windows.net.optimalcdn.com/images/2020/05/13/cuidadosperrosschnauzer-focus-min0.03-0.46-983-557.jpg"},
      {name: "Bolt", image:"https://sumedico.blob.core.windows.net.optimalcdn.com/images/2020/05/13/cuidadosperrosschnauzer-focus-min0.03-0.46-983-557.jpg"},
      {name: "Bolt", image:"https://sumedico.blob.core.windows.net.optimalcdn.com/images/2020/05/13/cuidadosperrosschnauzer-focus-min0.03-0.46-983-557.jpg"}
    ]
    const petsList = pets.map((pet, index) => {
      return <Pets key={index} name={pet.name} image={pet.image}/>

    });

    return(
      <div>
        <div className="card-deck">
          {petsList}
        </div>
      </div>
    );
  }
}
