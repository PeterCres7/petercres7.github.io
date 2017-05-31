document.getElementById("Projects").hidden = true;
document.getElementById("About").hidden = true;
document.getElementById("todocard").hidden = true;
document.getElementById("appiumcard").hidden = true;

document.getElementById("TasksDes").textContent = MyTasks;
document.getElementById("AppiumDes").textContent = MyAppium;

function ShowAbout() {
    document.getElementById("Hello").hidden = true;
    document.getElementById("Projects").hidden = true;
    document.getElementById("About").hidden = false;

    document.getElementById("todocard").hidden = true;
    document.getElementById("appiumcard").hidden = true;

    document.getElementById("AboutSection").hidden = false;
}

function ShowProjects() {
    document.getElementById("Hello").hidden = true;
    document.getElementById("About").hidden = true;
    document.getElementById("Projects").hidden = false;

    document.getElementById("todocard").hidden = false;
    document.getElementById("appiumcard").hidden = false;

    document.getElementById("AboutSection").hidden = true;
}


