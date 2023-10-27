const username = document.querySelector('.username');
const reg_noElement = document.querySelector('.reg_no');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        username.innerHTML = `${sessionStorage.name}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}
var timeTableText = document.getElementById("timeTableText");
      if (timeTableText) {
        timeTableText.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 3" to the project
        });
      }

      var moreFeaturesText = document.getElementById("moreFeaturesText");
      if (moreFeaturesText) {
        moreFeaturesText.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 4" to the project
        });
      }

      var createAGroup = document.getElementById("createAGroup");
      if (createAGroup) {
        createAGroup.addEventListener("click", function (e) {
          // Please sync "Desktop - 2" to the project
        });
      }

      var peerCenterText = document.getElementById("peerCenterText");
      if (peerCenterText) {
        peerCenterText.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 2" to the project
        });
      }