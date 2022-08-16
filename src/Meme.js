import React from "react";

export default function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/wxica.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleTextInput(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }
  function clearTextInput() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: "",
      bottomText: "",
    }));
  }

  return (
    <main>
      <div className="meme-form">
        <input
          className="form-input"
          type="text"
          name="topText"
          placeholder="Top text"
          onChange={handleTextInput}
          value={meme.topText}
        />
        <input
          className="form-input"
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          onChange={handleTextInput}
          value={meme.bottomText}
        />
        <button className="form-button" onClick={getMemeImage}>
          New image
        </button>
        <button className="form-button" onClick={clearTextInput}>
          Clear text
        </button>
      </div>
      <div className="box-meme-image">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
