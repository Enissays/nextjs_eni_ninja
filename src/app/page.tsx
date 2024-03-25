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



export function CatManager({position}: {position: {x: number, y: number}}) {
    // Get mouse position
    

  return <div><img src="cat.png" alt="Catto" id="cat" 
      style={{
        position: "absolute", 
        left: "0px", 
        top: "0px",
        transform: `translate(${position.x}px, ${position.y}px)`
      }} /></div>


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
  const [position, setPosition] = useState({x: 0, y: 0});
  var handleMouseMove = (e: any) => {
    var newPos = {x:position.x, y:position.y};
    if (e.clientX < position.x) newPos.x = position.x - 1;
    else if (e.clientX > position.x) newPos.x = position.x + 1;

    if (e.clientY < position.y) newPos.y = position.y - 1;
    else if (e.clientY > position.y) newPos.y = position.y + 1;

    setPosition(newPos);
  }
  return (
    <div className="center" onPointerMove={handleMouseMove}>
      <CatManager position={position} />
      <Profile />
    </div>
  );
}
