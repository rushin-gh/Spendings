const Head = () => {
  const app_logo = new URL("../assets/images/app-logo.png", import.meta.url)
    .href;

  return (
    <div id="head">
      <div id="head-left">
        <img id="app-logo" src={app_logo} alt="app-logo" />
        <div id="app-name">Spendings</div>
      </div>
      <div id="head-right">
        <div>Profile photo</div>
      </div>
    </div>
  );
};

export default Head;
