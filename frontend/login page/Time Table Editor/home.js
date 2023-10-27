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
var dashboardText = document.getElementById("dashboardText");
      if (dashboardText) {
        dashboardText.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 4" to the project
        });
      }

      var peerCenterText = document.getElementById("peerCenterText");
      if (peerCenterText) {
        peerCenterText.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 2" to the project
        });
      }

      var groupsText = document.getElementById("groupsText");
      if (groupsText) {
        groupsText.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 2" to the project
        });
      }