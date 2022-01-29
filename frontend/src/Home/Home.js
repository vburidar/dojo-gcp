import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="100%"
        height="100%"
        src="https://www.mapcrunch.com/"
      />
      <div className="bottom-placeholder" />
    </div>
  );
};

export default Home;
