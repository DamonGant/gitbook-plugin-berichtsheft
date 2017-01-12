window.addEventListener("load", setWeekData);
window.addEventListener("hashchange", setWeekData);
window.addEventListener("pushstate", setWeekData);
window.addEventListener("popstate", setWeekData);
window.onpopstate = setWeekData;

function setWeekData(){
  if (window.location.pathname.indexOf("/") === 0) {
    var splitPath = window.location.pathname.split('/');
    if (splitPath.length === 3) {
      var year = splitPath[1];
      var month = splitPath[2].split("\.")[0];

      console.dir(year);
      console.dir(month);
    }
  }
}
