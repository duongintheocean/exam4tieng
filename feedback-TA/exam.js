let listComment=JSON.parse(localStorage.getItem("listComment"))

let flag=0;
let count=0;
function send() {
    let comment={
        mark:+document.getElementById("mark").value,
        comment:document.getElementById("reviewPhu").value,
    }
    if(listComment==null){
        listComment=[];
        listComment.push(comment)
        localStorage.setItem("listComment",JSON.stringify(listComment))
    }else{
        if(flag==1){
            listComment.splice(count,1,comment);
            localStorage.setItem("listComment",JSON.stringify(listComment))
            render();
            flag=0;
            return 
        }
        listComment.push(comment)
        localStorage.setItem("listComment",JSON.stringify(listComment))
    }
    amountOfComment()
    averageRating()
    render()
}
render()
function render(){
    let renderThing="";
    for(i=0;i<listComment.length;i++){
        renderThing+=`
        <div>
                <span>
                    ${listComment[i].mark}
                </span>
                <span>
                    ${listComment[i].comment}
                </span>
                <button onclick="editButton(${i})">edit</button>
                <button onclick="deleteButton(${i})">X</button>
            </div>
        `
    }
    document.getElementById("renderHere").innerHTML=renderThing;
}
function deleteButton(id) {
    listComment.splice(id,1)
    localStorage.setItem("listComment",JSON.stringify(listComment))
    render()
}
function editButton(id){
    flag=1;
    document.getElementById("reviewPhu").value=listComment[id].comment;
    document.getElementById("mark").value=listComment[id].mark;
    count=id;
    console.log(count)
}
function amountOfComment(){
    let amount=listComment.length;
    document.getElementById("quantityOfReview").innerHTML= amount;
}
function averageRating(){
    let sum=0;
    for(i=0;i<listComment.length;i++){
        let markElement=+listComment[i].mark
        sum+= markElement;
    }
    let average=sum/listComment.length;
    console.log(average)
    document.getElementById("averageRating").innerHTML=average
}
amountOfComment()
averageRating()