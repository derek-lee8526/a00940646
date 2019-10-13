var storage = []

function showAdd() {
    var x = document.getElementById("addArtistForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


function addUser(name, desc, img) {
    var x = document.getElementById("addArtistForm");
    x.style.display = "none"; 
    let newDiv = document.createElement("div")
    let imgdiv = document.createElement("div");
    let namediv = document.createElement("div");
    let aboutdiv = document.createElement("div");
    let p = document.createElement("p")
    let p2 = document.createElement("p")
    let artistimage = document.createElement("img");
    let deleteButton = document.createElement("button");

    let artistname = document.createTextNode(name);
    let artistabout = document.createTextNode(desc);
    let text = document.createTextNode("Delete");

    p.appendChild(artistname);
    p2.appendChild(artistabout);
    deleteButton.appendChild(text);
    newDiv.appendChild(imgdiv);
    namediv.appendChild(p);
    aboutdiv.appendChild(p2);
    aboutdiv.appendChild(artistabout);
    imgdiv.appendChild(artistimage);
    imgdiv.appendChild(namediv);
    namediv.appendChild(aboutdiv);
    imgdiv.appendChild(deleteButton);
    deleteButton.setAttribute("id", "deleteButton")
    artistimage.setAttribute("src",img);
    newDiv.setAttribute("class", "userCard")
    newDiv.setAttribute("id", "deleteID" )
    imgdiv.setAttribute("class", "divBorder")
    namediv.setAttribute("class","userProfile userDiv")
    p.setAttribute("class", "userProfile")
    deleteButton.onclick = function() {
        let el = document.getElementById("deleteID");
        el.remove();
        deleteUser(name);
    }
    document.body.appendChild(newDiv);
    document.getElementById("form").reset();
}

function getUser() {
    let name = document.getElementById("name").value;
    let description = document.getElementById("about").value;
    let img = document.getElementById("image").value;
    addUser(name,description,img);
}


function addToStorage() {
    let name = document.getElementById("name");
    let description = document.getElementById("about");
    let img = document.getElementById("image");
    let artist = {
        "name": name.value,
        "desc": description.value,
        "img":img.value
    }
    
    this.storage.push(artist)
    localStorage.setItem("artist", JSON.stringify(storage))
}

function search() {
    let input, filter, textValue, parentdiv;
    input = document.getElementById("input");
    filter = input.value.toLowerCase();
    parentdiv = document.getElementsByClassName("userDiv");

    for(let i = 0; i < parentdiv.length; i++) {
        textValue = parentdiv[i].firstElementChild.textContent
        if(textValue.toLowerCase().indexOf(filter) > -1) {
            document.getElementsByClassName("userDiv")[i].parentElement.parentElement.style.display = "block"
        } else {
            document.getElementsByClassName("userDiv")[i].parentElement.parentElement.style.display = "none"
        }
    }

}

function deleteUser(name) {
    for(let i = 0; i < JSON.parse(localStorage.getItem("artist")).length; i++) {
        if(JSON.parse(localStorage.getItem("artist"))[i].name === name) {
            console.log(name)
            storage.splice(i,1);
            localStorage.setItem("artist", JSON.stringify(storage))
        }
    }
}


window.onload = function() {
    
    for(let i = 0; i < JSON.parse(localStorage.getItem("artist")).length; i++) {
        this.addUser(JSON.parse(localStorage.getItem("artist"))[i].name,JSON.parse(localStorage.getItem("artist"))[i].desc,JSON.parse(localStorage.getItem("artist"))[i].img)
    }
    storage = JSON.parse(localStorage.getItem("artist"))
}
