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
var timeTableEditor = document.getElementById("timeTableEditor");
      if (timeTableEditor) {
        timeTableEditor.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 3" to the project
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
          // Please sync "Slide 16:9 - 5" to the project
        });
      }