//Objective
{

}





//Testing js file with onclick
{
    //function run() {
    //    alert("Hello World!");
    //}


    

}


//Get an Element by its id
{
    //function run() {
    //    document.getElementById("paragraph").innerHTML = "Hello World!";
    //    document.getElementById("paragraph").style.backgroundColor = "green";
    //    document.getElementById("paragraph").style.color = "#ffffff";
    //    document.getElementById("paragraph").style.padding = "20px";
   //}


}


//Get a Random Number
{
    //function run() {
    //    document.getElementById("paragraph").innerHTML = "Hello World!";
    //    document.getElementById("paragraph").style.backgroundColor = "green";
    //    document.getElementById("paragraph").style.color = "#ffffff";
    //    document.getElementById("paragraph").style.padding = "20px";
    //    randomNum();
    //}

    //function randomNum() {
    //    var ran = Math.floor(Math.random() * 10);
    //    var x = document.getElementById("random")
    //    x.innerHTML = ran;
    //    x.style.backgroundColor = "#280cc1";
    //    x.style.color = "#ffffff";
    //    x.style.padding = "20px";
    //    x.style.textAlign = "center";
    //}
}


//Get the User Number
{
    //function run() {
    //    document.getElementById("paragraph").innerHTML = "Hello World!";
    //    document.getElementById("paragraph").style.backgroundColor = "green";
    //    document.getElementById("paragraph").style.color = "#ffffff";
    //    document.getElementById("paragraph").style.padding = "20px";
    //    randomNum();
    //    userNumber();
    //}

    //function randomNum() {
    //    var ran = Math.floor(Math.random() * 10);
    //    var x = document.getElementById("random")
    //    x.innerHTML = ran;
    //    x.style.backgroundColor = "#280cc1";
    //    x.style.color = "#ffffff";
    //    x.style.padding = "20px";
    //    x.style.textAlign = "center";
    //}

    //function userNumber() {
    //    var user = document.getElementById("getNumber").value;
    //    var y = document.getElementById("userNumber");
    //    y.innerHTML = user;
    //    y.style.color = "white";
    //    y.style.backgroundColor = "#ff00e2";
    //    y.style.padding = "20px";
    //    y.style.textAlign = "center";
    //}
}


//Compare Numbers
{
    //function run() {
    //    document.getElementById("paragraph").innerHTML = "Hello World!";
    //    document.getElementById("paragraph").style.backgroundColor = "green";
    //    document.getElementById("paragraph").style.color = "#ffffff";
    //    document.getElementById("paragraph").style.padding = "20px";
    //    randomNum();
    //    userNumber();
    //    compareNumbers();
    //}

    //function randomNum() {
    //    var ran = Math.floor(Math.random() * 10);
    //    var x = document.getElementById("random")
    //    x.innerHTML = ran;
    //    x.style.backgroundColor = "#280cc1";
    //    x.style.color = "#ffffff";
    //    x.style.padding = "20px";
    //    x.style.textAlign = "center";
    //    return ran;
    //}

    //function userNumber() {
    //    var user = document.getElementById("getNumber").value;
    //    var y = document.getElementById("userNumber");
    //    y.innerHTML = user;
    //    y.style.color = "white";
    //    y.style.backgroundColor = "#ff00e2";
    //    y.style.padding = "20px";
    //    y.style.textAlign = "center";
    //    return user;
    //}

    //function compareNumbers() {
    //    var a = userNumber();
    //    var b = randomNum();
    //    var z = document.getElementById("compare")

    //    if (a != b) {
    //        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
    //        z.style.color = "white";
    //        z.style.backgroundColor = "#ff0000";
    //        z.style.padding = "20px";
    //        z.style.textAlign = "center";
    //    } else if (a = b) {
    //        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
    //        z.style.color = "white";
    //        z.style.backgroundColor = "#00ff00";
    //        z.style.padding = "20px";
    //        z.style.textAlign = "center";
    //    }
    //}
}


//Program Return Key
{
    var userNum = document.getElementById("getNumber");
    userNum.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            run(e);
        }
    });
    
    function run() {
        document.getElementById("paragraph").innerHTML = "Hello World!";
        document.getElementById("paragraph").style.backgroundColor = "green";
        document.getElementById("paragraph").style.color = "#ffffff";
        document.getElementById("paragraph").style.padding = "20px";
        randomNum();
        userNumber();
        compareNumbers();
    }

    function randomNum() {
        var ran = Math.floor(Math.random() * 10);
        var x = document.getElementById("random")
        x.innerHTML = ran;
        x.style.backgroundColor = "#280cc1";
        x.style.color = "#ffffff";
        x.style.padding = "20px";
        x.style.textAlign = "center";
        return ran;
    }

    function userNumber() {
        var user = document.getElementById("getNumber").value;
        var y = document.getElementById("userNumber");
        y.innerHTML = user;
        y.style.color = "white";
        y.style.backgroundColor = "#ff00e2";
        y.style.padding = "20px";
        y.style.textAlign = "center";
        return user;
    }

    function compareNumbers() {
        var a = userNumber();
        var b = randomNum();
        var z = document.getElementById("compare")

        if (a != b) {
            z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
            z.style.color = "white";
            z.style.backgroundColor = "#ff0000";
            z.style.padding = "20px";
            z.style.textAlign = "center";
        } else if (a = b) {
            z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
            z.style.color = "white";
            z.style.backgroundColor = "#00ff00";
            z.style.padding = "20px";
            z.style.textAlign = "center";
        }
    }
}


//Focus and Reset Input Field
{

}


//Adding a Counter
{

}


//Query Selector and Cosmetic Changes
{

}