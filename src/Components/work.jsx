import React from 'react';
import Card from "./utils/card";
import Description from "./description";

import cimaroom from "./../Images/cards/cimaroom.jpg";
import vecodex from "./../Images/cards/vecodex.jpg";
import MoviesLand from "./../Images/cards/web1.jpg";
import GamesLand from "./../Images/cards/web2.jpg";
import TaskManager from "./../Images/cards/web6.jpg";
import RazioCruds from "./../Images/cards/web7.jpg";

import Aymen from "./../Images/logos/Aymen Jeddad logo.jfif";
import Tilawat from "./../Images/logos/TILAWAT.jpg";
import Avatar from "./../Images/logos/AVATAR 00.jpg";
import Azelmad from "./../Images/logos/logo ali azelmad.jpg";
import TrendsBuzz from "./../Images/logos/trends-buzz.png";
import Xrazio from "./../Images/logos/XR.jpg";
import wizCode from "./../Images/logos/wizCode.jpg";
import Mvn from "./../Images/logos/Mvn.jpg";
import MarocWeb from "./../Images/logos/MAWROCWEB.jpg";

import th1 from "./../Images/Thumbnails/th1.jpg";
import th2 from "./../Images/Thumbnails/th11.jpg";
import th3 from "./../Images/Thumbnails/th17.jpg";
import th4 from "./../Images/Thumbnails/th16.jpg";
import th5 from "./../Images/Thumbnails/th2.jpg";
import th6 from "./../Images/Thumbnails/th15.jpg";

const webDesign = [
  {
    name: "Cimaroom",
    desc: "is a start up company",
    image: cimaroom,
  },
  {
    name: "Vecodex",
    desc: "is a start up company",
    image: vecodex,
  },
  {
    name: "MoviesLand",
    desc: "is a start up company",
    image: MoviesLand,
  },
  {
    name: "GamesLand",
    desc: "is a start up company",
    image: GamesLand,
  },
  {
    name: "TaskManager",
    desc: "is a start up company",
    image: TaskManager,
  },
  {
    name: "RazioCruds",
    desc: "is a start up company",
    image: RazioCruds,
  },
];
const graphicDesign = [
  {
    name: "AJ Company",
    desc: "is a start up company",
    image: Aymen,
  },
  {
    name: "Tilawat",
    desc: "is a start up company",
    image: Tilawat,
  },
  {
    name: "Aymen Jeddad",
    desc: "is a start up company",
    image: Avatar,
  },
  {
    name: "Azelmad's Heros",
    desc: "is a start up company",
    image: Azelmad,
  },
  {
    name: "Trends Buzz",
    desc: "is a start up company",
    image: TrendsBuzz,
  },
  {
    name: "Razio",
    desc: "is a start up company",
    image: Xrazio,
  },
  {
    name: "wizCode",
    desc: "A digital Agency",
    image: wizCode,
  },
  {
    name: "Mvn",
    desc: "Mvn Brand",
    image: Mvn,
  },
  {
    name: "MAROCWEB",
    desc: "MAROC WEB",
    image: MarocWeb,
  },
];

const thumbnails = [
  {
    name : "upWork",
    image: th1
  },
  {
    name : "upWork",
    image: th2
  },
  {
    name : "upWork",
    image: th3
  },
  {
    name : "upWork",
    image: th4
  },
  {
    name : "upWork",
    image: th5
  },
  {
    name : "upWork",
    image: th6
  },
];


function Work() {

  return (
    <div>
      <div className="workContainer" id="work">
        <h1 className="About-h1 work-h1">work of gallery</h1>
        <div className="desc">
          <Description name="Web Design" data-aos="fade-up"/>
        </div>
        <div className="cards">
          {webDesign.map((card, index) => {
            return (
              <Card key={index} {...card}/>
            );
            
          })}
        </div>
        <div className="desc">
          <Description name="Graphic Design" data-aos="fade-up"/>
        </div>
        <div className="cards">
          {graphicDesign.map((card, index) => {
            return (
              <Card key={index} {...card}/>

            );
          })}
        </div>
        <div className="desc">
          <Description name="Thumbnails" data-aos="fade-up" />
        </div>
        <div className="cards">
          {thumbnails.map((card, index) => {
            return (
              <Card key={index} {...card}/>

            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Work;
