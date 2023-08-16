import data from "./data";
import { useState } from "react";

export default function Hero() {
  const [meme, setMeme] = useState({
    topText : "", bottomText:"",randomImg:"https://source.unsplash.com/random/?meme,day"});

    const [allMemeI, setAllMemeI] = useState(data)

  function handleEvents() {
    // let items = data.data.memes.map(item => item);
    const memesArray = allMemeI.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    const url = memesArray[randomNumber].url
    setMeme(prevMeme=> ({
      ...prevMeme,
      randomImg:url
      
    }))
  }

  return (
    <>
      <div className="all--form">
        <input type="text" placeholder="Shut Up" />
        <input type="text" placeholder="and take my money" />
        <button type="submit" onClick={handleEvents} className="btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div>

        <img src={meme.randomImg} alt="" width="500" />
      </div>
    </>
  );
}
