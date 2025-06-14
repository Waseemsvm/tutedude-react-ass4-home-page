import homepageImg from "../assets/homepage-sticker.png";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="first">
        <h1>Welcome to <i style={{textDecoration: "underline"}}>The Akrams Learning Point</i> </h1>
        <br />
        <br />
        <h2>Inspiring Education Exploration</h2>
      </div>
      <div className="second">
        <img src={homepageImg} alt="image-of-student" />
      </div>
    </div>
  );
}
