function Header() {
  return (
    <div className="header d-flex align-items-end justify-content-between">
      <h1>gitFinder</h1>
      <div
        className="d-flex align-items-start justify-content-between"
        style={{
          gap: "15px",
        }}
      >
        <p className="text-white fw-bolder">LIGHT</p>
        <img
          src="https://gitfinderapp.herokuapp.com/images/svg/icon-sun.svg"
          alt=""
        />
      </div>
    </div>
  );
}
export default Header;
