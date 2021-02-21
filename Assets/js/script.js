var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("#main");
var quizEl = document.querySelector(".quizAnswers");
var statsEl = document.querySelector(".stats");
var clickCount = 0

var startBtn = document.querySelector('#startBtn');

var secondsLeft = 70;


var beging = function setTime() {
    var countdown = setInterval(function () {
        timeEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        
        if (secondsLeft === 0) {
            clearInterval(countdown);
          timeEl.textContent = "Time's up";
         
        }
    }, 1000)

    var statsShowtime = setInterval(function () {
        var count = 2
        count--;
        if (count === 0) {
            clearInterval(statsShowtime);
            statsEl.textContent = " ";
        }
    }, 1000)

    function stopTime() {
        clearInterval(countdown);
    }

    mainEl.textContent = "Inside which HTML element do we put the JavaScript?";
    quizEl.textContent = " ";
    var listEl = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    var btn4 = document.createElement("button");

    btn1.textContent = "A. <javascript>";
    btn2.textContent = "B. <script>";
    btn3.textContent = "C. <js>";
    btn4.textContent = "D. <scripting>";

    quizEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.appendChild(btn1);
    li2.appendChild(btn2);
    li3.appendChild(btn3);
    li4.appendChild(btn4);

    
    btn1.addEventListener("click", btn1Click);
    btn1.addEventListener("click", questionList);
    btn2.addEventListener("click", btn2Click);
    btn2.addEventListener("click", questionList);
    btn3.addEventListener("click", btn3Click);
    btn3.addEventListener("click", questionList);
    btn4.addEventListener("click", btn4Click);
    btn4.addEventListener("click", questionList);

   

    function btn1Click() {
        clickCount++;
        if (clickCount == 1) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
        }
        else if (clickCount == 2) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
        }
        else if (clickCount == 3) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
        }
        else if (clickCount == 4) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
        }
        else if (clickCount == 5) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
            function stopTime() {
                clearInterval(countdown);
            }
        }
        setTimeout(() => {
            statsEl.textContent = " ";
        }, 1000);
        
        stopTime();
    }

    function btn2Click() {
        clickCount++;
        if (clickCount == 1) {
            statsEl.textContent = "Correct";
        }
        else if (clickCount == 2) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
        }
        else if (clickCount == 3) {
            statsEl.textContent = "Correct";
        }
        else if (clickCount == 4) {
            statsEl.textContent = "Correct";
        }
        else if (clickCount == 5) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
            function stopTime() {
                clearInterval(countdown);
            }
        }
        setTimeout(() => {
            statsEl.textContent = " ";
        }, 1000);
        
        stopTime();
    }
    
    function btn3Click() {
        clickCount++;
        if (clickCount == 1) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
            }
        else if (clickCount == 2) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
            }
        else if (clickCount == 3) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
            }
        else if (clickCount == 4) {
            statsEl.textContent = "Wrong";
            secondsLeft = secondsLeft - 10;
            }
        else if (clickCount == 5) {
            statsEl.textContent = "Correct";
            function stopTime() {
                clearInterval(countdown);
            }
        }
        setTimeout(() => {
            statsEl.textContent = " ";
        }, 1000);

        stopTime();
    }

    function btn4Click() {
        clickCount++;
        if (clickCount == 1) {
            statsEl.textContent = "Wrong";
            }
        else if (clickCount == 2) {
            statsEl.textContent = "Correct";
            }
        else if (clickCount == 3) {
            statsEl.textContent = "Wrong";
            }
        else if (clickCount == 4) {
            statsEl.textContent = "Wrong";
            }
        else if (clickCount == 5) {
            statsEl.textContent = "Wrong";
            function stopTime() {
                clearInterval(countdown);
            }
        }
        setTimeout(() => {
            statsEl.textContent = " ";
        }, 1000);
        
        stopTime();
    }

    

    function questionList() {
     if (clickCount == 1) {
        mainEl.textContent = "Which of the following is an advantage of using JavaScript?";
        
        btn1.textContent = "A. Less server interaction";
        btn2.textContent = "B. Immediate feedback to the visitors";
        btn3.textContent = "C. Increased Interactivity";
        btn4.textContent = "D. All of the above";
    } 
    else if (clickCount == 2) {
        mainEl.textContent = "Which built-in method combines the text of two strings and returns a new string?";

        btn1.textContent = "A. append()";
        btn2.textContent = "B. concat()";
        btn3.textContent = "C. attach()";
        btn4.textContent = "D. None of the above";
    }
    else if (clickCount == 3) {
        mainEl.textContent = "Which built-in method reverses the order of the elements of an array?";

        btn1.textContent = "A. changeOrder(order)";
        btn2.textContent = "B. reverse()";
        btn3.textContent = "C. sort(order)";
        btn4.textContent = "D. None of the above.";
    }
    else if (clickCount == 4) {
        mainEl.textContent = "Which of the following function of Array object adds and/or removes elements from an array?";

        btn1.textContent = "A. toSource()";
        btn2.textContent = "B. sort()";
        btn3.textContent = "C. splice()";
        btn4.textContent = "D. unshift()";
    }
    if (clickCount == 5) {
        timeEl.textContent = " ";
        mainEl.textContent = "Your Final Score is " + secondsLeft;
        var form = document.createElement("form");
        var name = document.createElement("p");
        var record = document.createElement("input"); 
        var submit = document.createElement('button');
        var clearBtn = document.createElement("button");

        record.type = "text";
        record.value = " ";
        mainEl.appendChild(form);
        form.appendChild(name);
        form.appendChild(record);
        form.appendChild(submit);
        name.textContent = "Enter Your Name: ";
        submit.textContent = "Submit";
        
        clearBtn.textContent = "Clear";
        quizEl.textContent = " ";
        quizEl.appendChild(clearBtn);

        submit.addEventListener('submit', function submitForm(event) {
            event.preventDefault();
            document.submit.submit();
          });
        
    }
    }

}

startBtn.addEventListener("click", beging);


setTime();