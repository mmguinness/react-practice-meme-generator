export default function Header() {

  function handleMouseOver() {
    console.log("Meme!")
  }

  return (
    <div className="header">
      <img onMouseOver={handleMouseOver} className="header--image" src="./meme-logo.jpeg" alt="" />
      <h2 className="header--text">
        Meme Generator <span className="course">React course - Project 3</span>
      </h2>
    </div>
  );
}
