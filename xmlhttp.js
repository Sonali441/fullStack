function getUserData() {
    let userId = document.getElementById("userid").value;
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let status = document.getElementById("status").checked;
    let completed;
    if (status) {
      completed = document.getElementById("status").value;
    } else {
      completed = document.getElementById("status").value = "Not Completed";
    }
    let user = {
      userid: userId,
      id: id,
      title: title,
      status: completed,
    };
    console.log(user);
    return user;
  }
  
  function sendData() {
    let userData = getUserData();
    //XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData));
  
    xhr.onload = function () {
      if (xhr.status == 201) {
        console.log("Successful" + xhr.response);
      } else {
        console.log("Failed" + xhr.status);
      }
    };
  
    xhr.onerror = () => {
      console.log("Network Error");
    };
  }

  function getData(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send()
  
    xhr.onload = function () {
      if (xhr.status == 200) {
        console.log("Successful" + xhr.response);
  };
}
  }