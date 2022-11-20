document.querySelector("#push").onclick = function(){
    if(document.querySelector("#newtask input").value.length == 0){
        alert("Please Enter a Task")
    }else{
        document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
            <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>`;
    
            let currentTask = document.querySelectorAll(".delete");
            for(let i=0; i< currentTask.length; i++){
                currentTask[i].onclick = function(){
                    this.parentNode.remove();
            }
            }
            document.querySelector("#newtask input").value= ""

    }

}



