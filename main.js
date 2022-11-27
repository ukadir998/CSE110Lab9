let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish
    

    let consoleLogButton = document.getElementById("logbtn");
    consoleLogButton.addEventListener("click", () => {
        console.log("Console Log Demo");
    })

    let errBtn = document.getElementById("errbtn");
    errBtn.addEventListener("click", () => {
        console.error("Console Error Demo");
    })

    let cntBtn = document.getElementById("cntbtn");
    cntBtn.addEventListener("click", () => {
        console.count("Console Count");
    })

    let warnbtn = document.getElementById("warnbtn");
    warnbtn.addEventListener("click", () => {
        console.warn("Console Warn Demo");
    })

    let assertbtn = document.getElementById("assertbtn");
    assertbtn.addEventListener("click", () => {
        let num = 5;
        console.assert(num == 3, "Error: num not equal to 3")
    })

    let clrbtn = document.getElementById("clrbtn");
    clrbtn.addEventListener("click", () => {
        console.clear();
    })

    let dirbtn = document.getElementById("dirbtn");
    let operator = document.getElementById("operator");
    dirbtn.addEventListener("click", () => {
        console.dir(operator);
    })

    let dirxmlbtn = document.getElementById("dirxmlbtn");
    dirxmlbtn.addEventListener("click", () => {
        console.dirxml(document);
    })

    let grpstartbtn = document.getElementById("grpstartbtn");
    grpstartbtn.addEventListener("click", () => {
        console.group();
    })

    let grpendbtn = document.getElementById("grpendbtn");
    grpendbtn.addEventListener("click", () => {
        console.groupEnd();
    })

    let tablebtn = document.getElementById("tablebtn");
    tablebtn.addEventListener("click", () => {
        console.table(["apples", "oranges", "bananas"]);
    })

    let strtimer = document.getElementById("strtimer");
    strtimer.addEventListener("click", () => {
        console.time();
    })

    let endtimer = document.getElementById("endtimer");
    endtimer.addEventListener("click", () => {
        console.timeEnd();
    })

    let tracebtn = document.getElementById("tracebtn");
    tracebtn.addEventListener("click", () => {
        console.trace("Cool");
    })

    try {
        const kham = 5;
        kham = 4;
    } catch (err){
        alert("trying to change constant");
    }

    class uzeError extends Error {
        constructor(message) {
            super(message);
            this.name = "uzeError";
        }
    }

    function letInDaClub(age) {
        if(!Number.isInteger(age)) {
            throw new uzeError("age is not a number");
        } else if (age < 21) {
            return true;
        }
        return false;
    }

    try {
        let age = "hi";
        letInDaClub(age);
    } catch(err) {
        if (err instanceof uzeError) {
            alert("Invalid Age");
        }
        else {
            throw err;
        }
    }