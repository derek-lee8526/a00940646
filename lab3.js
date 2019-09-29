function showAdd() {
    var x = document.getElementById("addArtistForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function addUser() {
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

    let name = document.getElementById("name").value;
    let description = document.getElementById("about").value;
    let img = document.getElementById("image").value;

    let artistname = document.createTextNode(name);
    let artistabout = document.createTextNode(description);
    let text = document.createTextNode("Delete");

    p.appendChild(artistname);
    p2.appendChild(artistabout);
    deleteButton.appendChild(text);
    document.getElementById("form").reset();
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
    }
    document.body.appendChild(newDiv);
}
