let mySaved = [];
const myInput = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const list = document.getElementById("ul");
const delBtn = document.getElementById("del");
const tabBtn = document.getElementById("tab-btn");

const mySavedFromLocalStorage = JSON.parse(localStorage.getItem("mySaved"))

if(mySavedFromLocalStorage){
    mySaved = mySavedFromLocalStorage;
    render(mySaved);
}

function render(saved){
    let itmes = "";
    for(let i = 0; i < saved.length; i++){
        itmes += `<li>
                        <a target = "_blank" href = " ${saved[i]} "> 
                        ${saved[i]} 
                        </a>      
                 </li>`;
    }

        list.innerHTML = itmes;
    }

saveBtn.addEventListener("click", function(){
    mySaved.push(myInput.value)
    myInput.value = "";
    localStorage.setItem("mySaved", JSON.stringify(mySaved))

      render(mySaved);
})

delBtn.addEventListener("click", function(){
    localStorage.clear();
    mySaved = [];
    render(mySaved)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs[0].url)
        mySaved.push(tabs[0].url)
        localStorage.setItem("mySaved", JSON.stringify(mySaved))
        render(mySaved)
    })
})

