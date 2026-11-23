document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

const user = {
    name:document.getElementById("name").value,
    age:document.getElementById("age").value
}

document.getElementById("output").textContent="Name: " + user.name + ", Age: " + user.age;

})

