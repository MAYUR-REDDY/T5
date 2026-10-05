let tasks = [];

let id = 1;

function append(){
    let input = document.getElementById("task").value;

    let task = {
        "id":id,
        "inputtask":input,
    }
    if(input == ""){
        alert("Enter your Tasks to add in the list");
        return;
    }
    tasks.push(task);
    console.log(tasks);

    id = id+1;

    addtask();

    
}

function addtask(){
    let result = document.getElementById("result");

    result.innerHTML = "";

    
    for(let i=0;i<tasks.length;i++){


       
        result.innerHTML+=`
        <div style="display: flex;">
            <input type = "checkbox" onclick="cross(${tasks[i].id})" style="margin-left:5px border:none"/>
            <p id = "para-${tasks[i].id}">${tasks[i].inputtask}</p>
        </div>
        `
        
    }

}
function cross(taskID){
    let context = document.getElementById(`para-${taskID}`);
    context.style.setProperty("text-decoration","line-through");

    context.style.setProperty("background-color","grey");
}