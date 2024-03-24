"use client"; 

import { useState } from "react";
import './models';

const Data = {
  name: "Eni",
  description : "J'fais des trucs stylés des fois",
  url : "https://cdn.discordapp.com/avatars/849936690915442698/12da23b52c72deff43c05c8a68a09c47.webp?size=1024&format=webp&width=0&height=256"
}

const Buttons = [
  {
    content: "Github",
    img: "https://cdn.discordapp.com/attachments/849936690915442698/850000109663336202/github.png",
    source: ""
  }, 
  {
    content: "Discord",
    img: "https://cdn.discordapp.com/attachments/849936690915442698/850000109663336202/github.png",
    source: ""
  }
]
function changePos(x:Number, y:Number) {
  var cat_elt = document.getElementById("cat");
  if (cat_elt) {
    cat_elt.style.left = `${x}px`;
    cat_elt.style.top = `${y}px`;
  }
}


export function CatManager() {
  const [position, setPosition] = useState({x: 0, y: 0});
  setInterval(() => {
    // Get mouse position
    document.onmousemove = function(e){
      if (e.clientX < position.x) {
        setPosition({x: position.x - 1, y: position.y})
      } else {
        setPosition({x: position.x + 1, y: position.y})
      }

      if (e.clientY < position.y) {
        setPosition({x: position.x, y: position.y - 1})
      } else {
        setPosition({x: position.x, y: position.y + 1})
      }

      changePos(position.x, position.y);
    }
  }, 1000);
  return <img src="src/assets/cat.png" alt="" id="cat"/>

}

export function Profile() {
  return (
      <div className="main">
      <div className="square"></div>
      <img className="avatar" src={Data.url} alt="" />
      <div className="main-title">Salut ! C'est <span className="special-text typewriter"></span></div>;
      <div className="main-description">{Data.description}</div>
      <div className="">
        {Buttons.map((button, index) => (
          <Button key={index} content={button.content} img={button.img} source={button.source} />
        ))}
      </div>
      </div>
  )

}

export function Button({content, img, source}: {content: string, img: string, source: string}) {
  return (
    <div className="button">
      <img src={img} alt="" />
      <a href={source}>{content}</a>
    </div>
  )
}

export default function Home() {
  return (
    <div className="center">
      <Profile />
    </div>
  );
}
