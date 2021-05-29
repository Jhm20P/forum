


document.querySelector(".Se-mere-funktion").addEventListener("click", function seMere() {

  if (document.querySelector(".Se-mere-funktion").innerHTML === "SE FLERE +") {
    document.querySelector(".Se-mere-funktion").innerHTML = "SE MINDRE -";
  } else {
    document.querySelector(".Se-mere-funktion").innerHTML = "SE FLERE +";
  }
  document.querySelector(".vis-ikke").classList.toggle("vis");
});

document.querySelector(".Se-mere").addEventListener("click", function seMereFeedBack() {

  if (document.querySelector(".Se-mere").innerHTML === "SE FLERE +") {
    document.querySelector(".Se-mere").innerHTML = "SE MINDRE -";
  } else {
    document.querySelector(".Se-mere").innerHTML = "SE FLERE +";
  }
  document.querySelector(".vis-ikke-feedback").classList.toggle("vis-feedback");
});


//card1
const detailsCard = (name, button) => {
  return {
    name,
    button,
    showDetails(){
    return `<div class="row">
<div class="col-3">
 <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/92546767_154523512694636_6384440811794683111_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VNxfWJo3OdYAX_dMBd4&oh=5acd1a7cf0c7044ee74dc95cc8bf95de&oe=5EC8E7AB" class="rounded-circle img-fluid">
</div>
<div class="col-9">
      <h4>${this.name}</h4>
      <textarea type="text" id="inputStatus" placeholder="Skriv din kommentar her"></textarea>
<div class="d-flex">
<button class="ml-auto" onclick="addToFunc(); eraseText()" type="button">${this.button}</button>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<div id="addTask">
</div>
</div>
</div>
`
  }
};
};

let detailsUpdate = detailsCard("Bruger", "Opdater Status");

document.querySelector("div.card1").innerHTML = detailsUpdate.showDetails();


const addToFunc = () =>{
   // gets value from main text area
    let userName = detailsUpdate.name;
    let input = document.getElementById('inputStatus').value;
     // creates element for the value of input
    let title = document.createElement("h6");
    let status = document.createElement("p");
    let reply = document.createElement("ul");
    let deleteButton = document.createElement("li");
    let like = document.createElement("li");
    let replyList = document.createElement("li");
    like.innerHTML = "Like";
    replyList.innerHTML = "Add Comment";
    title.innerHTML = userName;
  //creates a node for the original input
    let textnode = document.createTextNode(input);
    status.appendChild(textnode);
    status.prepend(title);
    status.appendChild(reply);
    reply.appendChild(like);
    reply.appendChild(replyList);
    reply.appendChild(deleteButton);
    document.getElementById('addTask').appendChild(status);
    status.classList.add("statusBox");
    like.classList.add("like");
    replyList.classList.add("reply");
    //userName.classList.add("title");

    //creates a container for the remove button
    let statusBox = document.createElement("div");
    //creates a button to delete status
    let removeTask = document.createElement('input');
    // adds type of which it is a button
    removeTask.setAttribute('type', 'button');
    removeTask.classList.add("removeButton");
    // sets the buttons value
    removeTask.setAttribute("value", "delete");
    // sets the button next to the status text
    deleteButton.appendChild(removeTask);
    //sets the button to remove status
    removeTask.addEventListener('click', function() {
        status.parentNode.removeChild(status);
    }, false);
    like.addEventListener('click', function() {
        this.classList.add("likeClicked");
    }, false);

  //For reply
    replyList.addEventListener('click', function() {
       this.classList.add("likeClicked");
       let luke = document.getElementById('addTask');
       let skywalker = document.createElement("textarea");
       let replied = document.createElement("p");
       let leia = document.createElement("input");
       leia.setAttribute('type', 'button');
       leia.setAttribute("value", "reply");
       leia.setAttribute("class","removeButton");
       skywalker.setAttribute("id","pushReply");
       skywalker.setAttribute("placeholder", "Reply to this comment");
       luke.appendChild(skywalker);
       luke.appendChild(leia);
       luke.appendChild(replied);
       leia.addEventListener('click', function(){
         let replyInput =     document.getElementById('pushReply').value;
         let replyNode = document.createTextNode(replyInput);
         replied.appendChild(replyNode);
         if(replyInput === ""){
         replied.classList.remove("statusBox");
         skywalker.parentNode.removeChild(skywalker);
         this.parentNode.removeChild(this);
         }else{
         let replyName = document.createElement("h6");
         let deleteComment = document.createElement("p");
         deleteComment.innerHTML = "Delete";
         deleteComment.classList.add("deleteComment");
         replyName.innerHTML = `${userName} says:`;
         replied.prepend(replyName);
         replied.prepend(deleteComment);
         replied.classList.add("statusBox");
         skywalker.parentNode.removeChild(skywalker);
         this.parentNode.removeChild(this);
           deleteComment.addEventListener('click', function() {
            replied.parentNode.removeChild(replied);
           }, false);
         }
       }, false);
    }, false);

};


const eraseText = () => {
  //erases placeholder text in textarea
    document.getElementById("inputStatus").value = "";
};


//card2
const detailsCard2 = (name2, button2) => {
  return {
    name2,
    button2,
    showDetails2(){
    return `<div class="row">
<div class="col-3">
 <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/92546767_154523512694636_6384440811794683111_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VNxfWJo3OdYAX_dMBd4&oh=5acd1a7cf0c7044ee74dc95cc8bf95de&oe=5EC8E7AB" class="rounded-circle img-fluid">
</div>
<div class="col-9">
      <h4>${this.name2}</h4>
      <textarea type="text" id="inputStatus2" placeholder="Skriv din kommentar her"></textarea>
<div class="d-flex">
<button class="ml-auto" onclick="addToFunc2(); eraseText2()" type="button">${this.button2}</button>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<div id="addTask2">
</div>
</div>
</div>
`
  }
};
};

let detailsUpdate2 = detailsCard2("Bruger", "Opdater Status");

document.querySelector("div.card2").innerHTML = detailsUpdate2.showDetails2();


const addToFunc2 = () =>{
   // gets value from main text area
    let userName2 = detailsUpdate2.name2;
    let input2 = document.getElementById('inputStatus2').value;
     // creates element for the value of input
    let title2 = document.createElement("h6");
    let status2 = document.createElement("p");
    let reply2 = document.createElement("ul");
    let deleteButton2 = document.createElement("li");
    let like2 = document.createElement("li");
    let replyList2 = document.createElement("li");
    like2.innerHTML = "Like";
    replyList2.innerHTML = "Add Comment";
    title2.innerHTML = userName2;
  //creates a node for the original input
    let textnode2 = document.createTextNode(input2);
    status2.appendChild(textnode2);
    status2.prepend(title2);
    status2.appendChild(reply2);
    reply2.appendChild(like2);
    reply2.appendChild(replyList2);
    reply2.appendChild(deleteButton2);
    document.getElementById('addTask2').appendChild(status2);
    status2.classList.add("statusBox");
    like2.classList.add("like");
    replyList2.classList.add("reply");
    //userName.classList.add("title");

    //creates a container for the remove button
    let statusBox2 = document.createElement("div");
    //creates a button to delete status
    let removeTask2 = document.createElement('input');
    // adds type of which it is a button
    removeTask2.setAttribute('type', 'button');
    removeTask2.classList.add("removeButton");
    // sets the buttons value
    removeTask2.setAttribute("value", "delete");
    // sets the button next to the status text
    deleteButton2.appendChild(removeTask2);
    //sets the button to remove status
    removeTask2.addEventListener('click', function() {
        status2.parentNode.removeChild(status2);
    }, false);
    like2.addEventListener('click', function() {
        this.classList.add("likeClicked");
    }, false);

  //For reply
    replyList2.addEventListener('click', function() {
       this.classList.add("likeClicked");
       let luke2 = document.getElementById('addTask2');
       let skywalker2 = document.createElement("textarea");
       let replied2 = document.createElement("p");
       let leia2 = document.createElement("input");
       leia2.setAttribute('type', 'button');
       leia2.setAttribute("value", "reply");
       leia2.setAttribute("class","removeButton");
       skywalker2.setAttribute("id","pushReply");
       skywalker2.setAttribute("placeholder", "Reply to this comment");
       luke2.appendChild(skywalker2);
       luke2.appendChild(leia2);
       luke2.appendChild(replied2);
       leia2.addEventListener('click', function(){
         let replyInput2 =     document.getElementById('pushReply').value;
         let replyNode2 = document.createTextNode(replyInput2);
         replied2.appendChild(replyNode2);
         if(replyInput2 === ""){
         replied2.classList.remove("statusBox");
         skywalker2.parentNode.removeChild(skywalker2);
         this.parentNode.removeChild(this);
         }else{
         let replyName2 = document.createElement("h6");
         let deleteComment2 = document.createElement("p");
         deleteComment2.innerHTML = "Delete";
         deleteComment2.classList.add("deleteComment");
         replyName2.innerHTML = `${userName2} says:`;
         replied2.prepend(replyName2);
         replied2.prepend(deleteComment2);
         replied2.classList.add("statusBox");
         skywalker2.parentNode.removeChild(skywalker2);
         this.parentNode.removeChild(this);
           deleteComment2.addEventListener('click', function() {
            replied2.parentNode.removeChild(replied2);
           }, false);
         }
       }, false);
    }, false);

};


const eraseText2 = () => {
  //erases placeholder text in textarea
    document.getElementById("inputStatus2").value = "";
};

//card3
const detailsCard3 = (name3, button3) => {
  return {
    name3,
    button3,
    showDetails3(){
    return `<div class="row">
<div class="col-3">
 <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/92546767_154523512694636_6384440811794683111_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VNxfWJo3OdYAX_dMBd4&oh=5acd1a7cf0c7044ee74dc95cc8bf95de&oe=5EC8E7AB" class="rounded-circle img-fluid">
</div>
<div class="col-9">
      <h4>${this.name3}</h4>
      <textarea type="text" id="inputStatus3" placeholder="Skriv din kommentar her"></textarea>
<div class="d-flex">
<button class="ml-auto" onclick="addToFunc3(); eraseText3()" type="button">${this.button3}</button>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<div id="addTask3">
</div>
</div>
</div>
`
  }
};
};

let detailsUpdate3 = detailsCard3("Bruger", "Opdater Status");

document.querySelector("div.card3").innerHTML = detailsUpdate3.showDetails3();


const addToFunc3 = () =>{
   // gets value from main text area
    let userName3 = detailsUpdate3.name3;
    let input3 = document.getElementById('inputStatus3').value;
     // creates element for the value of input
    let title3 = document.createElement("h6");
    let status3 = document.createElement("p");
    let reply3 = document.createElement("ul");
    let deleteButton3 = document.createElement("li");
    let like3 = document.createElement("li");
    let replyList3 = document.createElement("li");
    like3.innerHTML3 = "Like";
    replyList3.innerHTML = "Add Comment";
    title3.innerHTML = userName3;
  //creates a node for the original input
    let textnode3 = document.createTextNode(input3);
    status3.appendChild(textnode3);
    status3.prepend(title3);
    status3.appendChild(reply3);
    reply3.appendChild(like3);
    reply3.appendChild(replyList3);
    reply3.appendChild(deleteButton3);
    document.getElementById('addTask3').appendChild(status3);
    status3.classList.add("statusBox");
    like3.classList.add("like");
    replyList3.classList.add("reply");
    //userName.classList.add("title");

    //creates a container for the remove button
    let statusBox3 = document.createElement("div");
    //creates a button to delete status
    let removeTask3 = document.createElement('input');
    // adds type of which it is a button
    removeTask3.setAttribute('type', 'button');
    removeTask3.classList.add("removeButton");
    // sets the buttons value
    removeTask3.setAttribute("value", "delete");
    // sets the button next to the status text
    deleteButton3.appendChild(removeTask3);
    //sets the button to remove status
    removeTask3.addEventListener('click', function() {
        status3.parentNode.removeChild(status3);
    }, false);
    like3.addEventListener('click', function() {
        this.classList.add("likeClicked");
    }, false);

  //For reply
    replyList3.addEventListener('click', function() {
       this.classList.add("likeClicked");
       let luke3 = document.getElementById('addTask3');
       let skywalker3 = document.createElement("textarea");
       let replied3 = document.createElement("p");
       let leia3 = document.createElement("input");
       leia3.setAttribute('type', 'button');
       leia3.setAttribute("value", "reply");
       leia3.setAttribute("class","removeButton");
       skywalker3.setAttribute("id","pushReply");
       skywalker3.setAttribute("placeholder", "Reply to this comment");
       luke3.appendChild(skywalker3);
       luke3.appendChild(leia3);
       luke3.appendChild(replied3);
       leia3.addEventListener('click', function(){
         let replyInput3 =     document.getElementById('pushReply').value;
         let replyNode3 = document.createTextNode(replyInput3);
         replied3.appendChild(replyNode3);
         if(replyInput3 === ""){
         replied3.classList.remove("statusBox");
         skywalker3.parentNode.removeChild(skywalker3);
         this.parentNode.removeChild(this);
         }else{
         let replyName3 = document.createElement("h6");
         let deleteComment3 = document.createElement("p");
         deleteComment3.innerHTML = "Delete";
         deleteComment3.classList.add("deleteComment");
         replyName3.innerHTML = `${userName3} says:`;
         replied3.prepend(replyName3);
         replied3.prepend(deleteComment3);
         replied3.classList.add("statusBox");
         skywalker3.parentNode.removeChild(skywalker3);
         this.parentNode.removeChild(this);
           deleteComment3.addEventListener('click', function() {
            replied3.parentNode.removeChild(replied3);
           }, false);
         }
       }, false);
    }, false);

};


const eraseText3 = () => {
  //erases placeholder text in textarea
    document.getElementById("inputStatus3").value = "";
};

//card4
const detailsCard4 = (name4, button4) => {
  return {
    name4,
    button4,
    showDetails4(){
    return `<div class="row">
<div class="col-3">
 <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/92546767_154523512694636_6384440811794683111_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VNxfWJo3OdYAX_dMBd4&oh=5acd1a7cf0c7044ee74dc95cc8bf95de&oe=5EC8E7AB" class="rounded-circle img-fluid">
</div>
<div class="col-9">
      <h4>${this.name4}</h4>
      <textarea type="text" id="inputStatus4" placeholder="Skriv din kommentar her"></textarea>
<div class="d-flex">
<button class="ml-auto" onclick="addToFunc4(); eraseText4()" type="button">${this.button4}</button>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<div id="addTask4">
</div>
</div>
</div>
`
  }
};
};

let detailsUpdate4 = detailsCard4("Bruger", "Opdater Status");

document.querySelector("div.card4").innerHTML = detailsUpdate4.showDetails4();


const addToFunc4 = () =>{
   // gets value from main text area
    let userName4 = detailsUpdate4.name4;
    let input4 = document.getElementById('inputStatus4').value;
     // creates element for the value of input
    let title4 = document.createElement("h6");
    let status4 = document.createElement("p");
    let reply4 = document.createElement("ul");
    let deleteButton4 = document.createElement("li");
    let like4 = document.createElement("li");
    let replyList4 = document.createElement("li");
    like4.innerHTML = "Like";
    replyList4.innerHTML = "Add Comment";
    title4.innerHTML = userName4;
  //creates a node for the original input
    let textnode4 = document.createTextNode(input4);
    status4.appendChild(textnode4);
    status4.prepend(title4);
    status4.appendChild(reply4);
    reply4.appendChild(like4);
    reply4.appendChild(replyList4);
    reply4.appendChild(deleteButton4);
    document.getElementById('addTask4').appendChild(status4);
    status4.classList.add("statusBox");
    like4.classList.add("like");
    replyList4.classList.add("reply");
    //userName.classList.add("title");

    //creates a container for the remove button
    let statusBox4 = document.createElement("div");
    //creates a button to delete status
    let removeTask4 = document.createElement('input');
    // adds type of which it is a button
    removeTask4.setAttribute('type', 'button');
    removeTask4.classList.add("removeButton");
    // sets the buttons value
    removeTask4.setAttribute("value", "delete");
    // sets the button next to the status text
    deleteButton4.appendChild(removeTask4);
    //sets the button to remove status
    removeTask4.addEventListener('click', function() {
        status4.parentNode.removeChild(status4);
    }, false);
    like4.addEventListener('click', function() {
        this.classList.add("likeClicked");
    }, false);

  //For reply
    replyList4.addEventListener('click', function() {
       this.classList.add("likeClicked");
       let luke4 = document.getElementById('addTask4');
       let skywalker4 = document.createElement("textarea");
       let replied4 = document.createElement("p");
       let leia4 = document.createElement("input");
       leia4.setAttribute('type', 'button');
       leia4.setAttribute("value", "reply");
       leia4.setAttribute("class","removeButton");
       skywalker4.setAttribute("id","pushReply");
       skywalker4.setAttribute("placeholder", "Reply to this comment");
       luke4.appendChild(skywalker4);
       luke4.appendChild(leia4);
       luke4.appendChild(replied4);
       leia4.addEventListener('click', function(){
         let replyInput4 =     document.getElementById('pushReply').value;
         let replyNode4 = document.createTextNode(replyInput4);
         replied4.appendChild(replyNode4);
         if(replyInput4 === ""){
         replied4.classList.remove("statusBox");
         skywalker4.parentNode.removeChild(skywalker4);
         this.parentNode.removeChild(this);
         }else{
         let replyName4 = document.createElement("h6");
         let deleteComment4 = document.createElement("p");
         deleteComment4.innerHTML = "Delete";
         deleteComment4.classList.add("deleteComment");
         replyName4.innerHTML = `${userName4} says:`;
         replied4.prepend(replyName4);
         replied4.prepend(deleteComment4);
         replied4.classList.add("statusBox");
         skywalker4.parentNode.removeChild(skywalker4);
         this.parentNode.removeChild(this);
           deleteComment4.addEventListener('click', function() {
            replied4.parentNode.removeChild(replied4);
           }, false);
         }
       }, false);
    }, false);

};


const eraseText4 = () => {
  //erases placeholder text in textarea
    document.getElementById("inputStatus4").value = "";
};


document.querySelector(".kommentar1").addEventListener("click", function tooltip() {
  document.querySelector(".nyhed1").classList.toggle("vis-ikke-nyhed1");
});

document.querySelector(".kommentar2").addEventListener("click", function tooltip() {
  document.querySelector(".nyhed2").classList.toggle("vis-ikke-nyhed2");
});

document.querySelector(".kommentar3").addEventListener("click", function tooltip() {
  document.querySelector(".feedback1").classList.toggle("vis-ikke-feedback1");
});

document.querySelector(".kommentar4").addEventListener("click", function tooltip() {
  document.querySelector(".feedback2").classList.toggle("vis-ikke-feedback2");
});
