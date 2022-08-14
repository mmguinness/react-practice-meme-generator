import memesData from "./memesData";
import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/wxica.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(
    memesData.data.memes
  );

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMeme({
      topText: "",
      bottomText: "",
      randomImage: allMemeImages[randomNumber].url,
    });
  }

  return (
    <main>
      <div className="meme-form">
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Top text"
        />
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Bottom text"
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="box-meme-image">
        <img src={meme.randomImage} alt="" className="meme-image" />
      </div>
    </main>
  );
}
