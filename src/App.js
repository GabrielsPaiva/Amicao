import React from 'react'
import './App.css';
import logo_image from './assets/logo_image.png'
import logo_name from './assets/logo_name.png'
import Tulio from './assets/Túlio.jpg'
import Pipoca from './assets/Pipoca.jpg'
import Spike from './assets/Spike.jpg'
import Trovao from './assets/Trovão.jpg'
import Oliver from './assets/Oliver.jpg'
import Lola from './assets/Lola.jpg'
import Garfield from './assets/Garfield.jpg'
import Loki from './assets/Loki.jpg'
import Facebook from './assets/facebook.jpg'
import Twitter from './assets/twitter.jpg'
import Instagram from './assets/instagram.jpg'

export default class Adoption extends React.Component{

  state = {
    dogs: [
      {breed: "Chiwawa", age: "5 years"},
      {breed: "SRD", age: "9 years" },
      {breed: "Pastor", age: "2 years" },
      {breed: "Pitbull", age: "1 year"},
    ],
    cats: [
      {breed: "angorá", age: "10 years" },
      {breed: "persa", age: "12 years" },
      {breed: "malandro", age: "7 years" },
      {breed: "siamês", age: "7 years"}
    ],
    dogsList: null,
    catsList: null,
    detailsButton: 'ver detalhes',
    catDetailsButton : 'ver detalhes'
  };

DogsButton = () =>{
  if( this.state.dogsList === null){
    this.setState({
    dogsList : this.state.dogs.map((item) =>(
      <div>
        <h2>Raça : {item.breed}</h2>
        <h2>Ano : {item.age}</h2>
      </div>
    )),
    detailsButton: 'recolher'
  })
}else(
  this.setState({
    dogsList : null,
    detailsButton : 'ver detalhes',
  })
)
}

CatsButton = () =>{
  if( this.state.catsList === null){
    this.setState({
    catsList : this.state.cats.map((item) =>(
      <div>
        <h2>Raça : {item.breed}</h2>
        <h2>Ano : {item.age}</h2>
      </div>
    )),
    catDetailsButton: 'recolher'
  })
}else(
  this.setState({
    catsList : null,
    catDetailsButton : 'ver detalhes'
  })
)
}

ListButton = () =>{
  this.setState({
    list : []
  })
}

  render(){
    return(
      <div>
        <header>
          <div className='logo'>
          <img className='logo-image' src={logo_image} alt='um coração formado por um gato e um cachorro'/>
          <img className='logo-name' src={logo_name} alt=''/>
          </div>
          <h2>Já pensou em adotar um cão ou gato pela adoção responsável? Tem vontade de adotar um animalzinho carente? Conte com conosco para lhe oferecer sua primeira experiência com um bichinho de estimação! </h2>
        </header>
        <main>
          <h2 className='main-title'>amigões dispostos à uma nova casa</h2>
          <h2 className='dogs'>Cães</h2>
          <div className='dogs-section'>
            <div className='dogs-images'>
              <img src={Tulio} alt='Foto de um Chiwawa na grama'/>
              <img src={Pipoca} alt='Um SRD co o fundo desfocado, olhando pra câmera'/>
              <img src={Spike} alt='Pastor Alemão posando deitado, olhando pra câmera'/>
              <img src={Trovao} alt='Foto de um pitbull tirada de um angulo superior ao dele, olhando pra câmera'/>
            </div>
            <div className='dogs-names'>
              <p>Túlio</p>
              <p>Pipoca</p>
              <p>Spike</p>
              <p>Trovão</p>
          </div>
          <button className='details-button' onClick={this.DogsButton}>{this.state.detailsButton}</button>
            <p className='dogs-details'>{this.state.dogsList}</p>
          </div>
          <h2 className='cats'>Gatos</h2>
          <div className='cats-section'>
          <div className='cats-images'>
            <img src={Oliver} alt='um gato angorá olhando para a esquerda da câmera'/>
            <img src={Lola} alt='um gato persa sentado de frente pra câmera'/>
            <img src={Garfield} alt='um gato com extrema semelhança ao personagem Garfield'/>
            <img src={Loki} alt='um gato deitado numa calçada olhando direto pra câmera'/>
          </div>
          <div className='cats-names'>
            <p>Oliver</p>
            <p>Lola</p>
            <p>Garfield</p>
            <p>Loki</p>
          </div>
          <button className='catDetails-button' onClick={this.CatsButton}>{this.state.catDetailsButton}</button>
          <p className='catsDetails'>{this.state.catsList}</p>
          </div>
        </main>
        <footer>
          <div className='social-medias'>
          <img src={Facebook} alt=''/>
          <img src={Twitter} alt=''/>
          <img src={Instagram} alt=''/>
          </div>
        </footer>
      </div>
    )
  }
}
