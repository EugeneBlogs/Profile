let path;
function Change() {
    document.getElementById("edit").style.display = "block";
    document.getElementById("static").style.display = "none";
    document.getElementById("edit_name").value = document.getElementById("name").innerHTML;
    document.getElementById("edit_status").value = document.getElementById("status").innerHTML;
    document.getElementById("edit_email").value = document.getElementById("email").innerHTML;
    document.getElementById("edit_phone").value = document.getElementById("phone").innerHTML;
    document.getElementById("edit_date").value = document.getElementById("date").innerHTML;
    document.getElementById("edit_photo").src = document.getElementById("photo").src;
    document.getElementById("file_input").value = "";
}
function Save() {
    document.getElementById("static").style.display = "block";
    document.getElementById("edit").style.display = "none";
    document.getElementById("name").innerHTML = document.getElementById("edit_name").value;
    document.getElementById("status").innerHTML = document.getElementById("edit_status").value;
    document.getElementById("email").innerHTML = document.getElementById("edit_email").value;
    document.getElementById("phone").innerHTML = document.getElementById("edit_phone").value;
    document.getElementById("date").innerHTML = document.getElementById("edit_date").value;
    if (document.getElementById("file_input").value != "")
        document.getElementById("photo").src = path;
}
function Cancel() {
    document.getElementById("static").style.display = "block";
    document.getElementById("edit").style.display = "none";
}
function ReadFile(input) {
    let file = input.files[0];
    path = URL.createObjectURL(file);
    document.getElementById("edit_photo").src = path;
}