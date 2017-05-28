document.getElementById("Projects").hidden = true;
document.getElementById("About").hidden = true;

document.getElementById("TasksDes").textContent = MyTasks;
document.getElementById("AppiumDes").textContent = MyAppium;

function ShowAbout() {
    document.getElementById("Hello").hidden = true;
    document.getElementById("Projects").hidden = true;
    document.getElementById("About").hidden = false;
}

function ShowProjects() {
    document.getElementById("Hello").hidden = true;
    document.getElementById("About").hidden = true;
    document.getElementById("Projects").hidden = false;
}


