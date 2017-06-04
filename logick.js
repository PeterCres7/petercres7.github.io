document.getElementById("Projects").hidden = true;
document.getElementById("About").hidden = true;
document.getElementById("todocard").hidden = true;
document.getElementById("appiumcard").hidden = true;

document.getElementById("TasksDes").textContent = MyTasks;
document.getElementById("AppiumDes").textContent = MyAppium;
document.getElementById("AboutDes").textContent = MyDesc;

function ShowAbout() {
    document.getElementById("Hello").hidden = true;
    document.getElementById("Projects").hidden = true;
    document.getElementById("About").hidden = false;

    document.getElementById("todocard").hidden = true;
    document.getElementById("appiumcard").hidden = true;

    document.getElementById("photo").hidden = false;
    document.getElementById("AboutDes").hidden = false;
}

function ShowProjects() {
    document.getElementById("Hello").hidden = true;
    document.getElementById("About").hidden = true;
    document.getElementById("Projects").hidden = false;

    document.getElementById("todocard").hidden = false;
    document.getElementById("appiumcard").hidden = false;

    document.getElementById("photo").hidden = true;
    document.getElementById("AboutDes").hidden = true;
}

function LoadingDone() {
    //Will need for the fetures!
}