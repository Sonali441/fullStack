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
    //axios.post(url,body,headers)
    //axios.get(url,headers)
    let p = axios.post("https://jsonplaceholder.typicode.com/posts", userData, {
      "Content-type": "application/json",
    });
    console.log(p);
    p.then(function (response) {
      console.log(response);
    }).catch(function (err) {
      console.log(err);
    });
  }

  function getData(){
      let p=axios.get("https://jsonplaceholder.typicode.com/posts",{"Content-type":"application/json",});
  
  console.log(p);
  
  p.then(function (response) {
      let result= response.data
    console.log(response.data);
    return result
  }).then(function (result) {
    console.log(result);
    let tbl = `<table>
    <tr>
      <th>Body</th>
      <th>title</th>
      <th>id</th>
      <th>userid</th>
    </tr>`;

    result.map((element) => {
      tbl =tbl+ `<tr>
            <td>${element.body}</td>
            <td>${element.title}</td>
            <td>${element.id}</td>
            <td>${element.userId}</td>
        </tr>`;
    });
    document.getElementById("msg").innerHTML = tbl;
  });
}