// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function(response) {

        // handle success
        for (let i = 0; i < response.data.length; i++) {
            document.querySelector("ul#chat").innerHTML +=
                `<li class="msg">
          <img src=${response.data[i].profilePic}>
          <div class="msg-body">
            <div class="names">
              <h3>${response.data[i].name}</h3>
              <span>${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}</span>
            </div>
            <div class="msg-text">
            ${response.data[i].firstLine}
          </div>
        </li>
        `
        }
        console.log(response);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
        console.log("error");

    })
    .finally(function() {
        // always executed
        console.log("The end!");
    });