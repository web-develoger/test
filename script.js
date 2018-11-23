function myFirstApp(name, age) {

    alert("Привет, меня зовут: " + name + " и это моя первая программа!");
    function showSkills() {
        let skills = ["html", "css", "photoshop"];
        document.write("Я владею ");
        for (let i = 0; i < skills.length; i++) {
        document.write(skills[i] + "<br>");
         }
    }

showSkills();

function checkAge() {
    if (age > 18) {
        alert("Добро пожаловать");
    } else {
        alert("Нельзя");
    }
}
checkAge(20);
function calcPow(num) {
    console.log(num * num);
}
calcPow(4);
}
myFirstApp("Dima", 20);