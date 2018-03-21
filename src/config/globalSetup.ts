let setupGlobal = () => {
  window.Release= false;
 // window['Release']
  window["ENV"] = {isRelease: false};

}

export { setupGlobal };
