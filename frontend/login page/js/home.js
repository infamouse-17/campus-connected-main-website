const username = document.querySelector('.username');
const reg_noElement = document.querySelector('.reg_no');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        username.innerHTML = `${sessionStorage.name}`;
        reg_noElement.innerHTML = `${sessionStorage.reg_no}`;
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

      var groupsText = document.getElementById("groupsText");
      if (groupsText) {
        groupsText.addEventListener("click", function (e) {
          // Please sync "Slide 16:9 - 5" to the project
        });
      }