document.getElementById("Projects").hidden = true;
document.getElementById("About").hidden = true;

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


