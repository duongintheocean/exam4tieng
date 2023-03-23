let listPlayer=JSON.parse(localStorage.getItem("listPlayer"));
function add() {
    let player={
        namePlayer:document.getElementById("userInput").value,
        point:0,
    }
    if(listPlayer==null){
        listPlayer=[];
        listPlayer.push(player)
        localStorage.setItem("listPlayer",JSON.stringify(listPlayer))
    }else{
        listPlayer.push(player)
        localStorage.setItem("listPlayer",JSON.stringify(listPlayer))
    }
    render()
    playerAmount()
}
function render(){
    let renderthing="";
    for(i=0;i<listPlayer.length;i++){
        renderthing+=`
    <tr>
        <td>
            <button onclick="deleteButton(${i})">X</button>
        </td>
        <td>
            ${listPlayer[i].namePlayer}
        </td>
        <td>
            <button onclick="minusButton(${i})">-</button>
        </td>
        <td>
            ${listPlayer[i].point}
        </td>
        <td>
            <button onclick="plusButton(${i})">+</button>
        </td>
    </tr>
        `
    }
    document.getElementById("renderHere").innerHTML=renderthing;
}
render()
function deleteButton(id){
    listPlayer.splice(id,1);
    localStorage.setItem("listPlayer",JSON.stringify(listPlayer));
    render();
}
function minusButton(id){
    listPlayer[id].point=listPlayer[id].point-1;
    localStorage.setItem("listPlayer",JSON.stringify(listPlayer));
    render();
    totalPoint()
}
function plusButton(id){
    listPlayer[id].point=listPlayer[id].point+1;
    localStorage.setItem("listPlayer",JSON.stringify(listPlayer));
    render();
    totalPoint()
}
function playerAmount() {
    let amont=listPlayer.length;
    document.getElementById("player").innerHTML=amont
}
function totalPoint(){
    let total=0
    for (let index = 0; index < listPlayer.length; index++) {
        let mark= +listPlayer[index].point;
        total+=mark;
    }
    document.getElementById("total").innerHTML=total;
}
playerAmount()
totalPoint()
let flag=0;
let intervalId; 
function start() {
  if (!intervalId) { 
    let startTime = 0;
    intervalId = setInterval(function() {
      document.getElementById("oclock").innerHTML = startTime;
      startTime++;
    }, 1000);
  }
}

function stop() {
  clearInterval(intervalId);
  intervalId = null; 
}
function reset() {
  stop(); 
  document.getElementById("oclock").innerHTML = "0"; 
}