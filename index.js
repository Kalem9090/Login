

 function add(){
    // variable
    let mdp = document.getElementById("mdp").value;

    let user = document.getElementById("user").value;

    localStorage.setItem("mdp", mdp);

    localStorage.setItem("user", user);
    
}