document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

const constraints = {
    video: true,
    audio: false
};

const setupMedia = async() => {
    try {
        let videoStream = await navigator.mediaDevices.getUserMedia(constraints);
        let videoElement = document.createElement('video');
        videoElement.srcObject = videoStream;
        videoElement.autoplay = true;
        document.body.append(videoElement);
    } catch (error) {
        console.error("Error accessing media devices.", error);
    }
}

let questions = [];
let score = 0;
let timer;
let timeLeft = 120;
let hiddenTime;

const fetchQuestions = async() => {
    try {
        const response = await fetch('http://localhost:3000/questions');
        const data = await response.json();
        questions = data;
        Quiz();
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
};

const Quiz = () => {
    questions.map((e, index) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${e.question}`;
        let btn1 = document.createElement("button");
        btn1.innerHTML = `A. ${e.option1}`;
        let btn2 = document.createElement("button");
        btn2.innerHTML = `B. ${e.option2}`;
        let btn3 = document.createElement("button");
        btn3.innerHTML = `C. ${e.option3}`;
        let btn4 = document.createElement("button");
        btn4.innerHTML = `D. ${e.option4}`;

        btn1.className = "btn";
        btn2.className = "btn";
        btn3.className = "btn";
        btn4.className = "btn";

        btn1.addEventListener("click", () => {
            Quiz_Ans(index, e.option1, btn1);
        });

        btn2.addEventListener("click", () => {
            Quiz_Ans(index, e.option2, btn2);
        });

        btn3.addEventListener("click", () => {
            Quiz_Ans(index, e.option3, btn3);
        });

        btn4.addEventListener("click", () => {
            Quiz_Ans(index, e.option4, btn4);
        });

        document.querySelector(".qz").append(h1, btn1, btn2, btn3, btn4);
    })
}

const addQst = async(e) => {
    e.preventDefault();
    let qst = document.querySelector("#qst").value;
    let opt1 = document.querySelector("#opt1").value;
    let opt2 = document.querySelector("#opt2").value;
    let opt3 = document.querySelector("#opt3").value;
    let opt4 = document.querySelector("#opt4").value;
    let ans = document.querySelector("#ans").value;

    let newQ = { question: qst, option1: opt1, option2: opt2, option3: opt3, option4: opt4, answer: ans };

    try {
        const response = await fetch('https://json-server-mdhl.onrender.com/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQ)
        });

        const data = await response.json();
        questions.push(data);

        document.querySelector(".qz").innerHTML = "";
        Quiz();
        document.querySelector("#frm").reset();
    } catch (error) {
        console.error("Error adding question:", error);
    }
}

const Quiz_Ans = (index, sAns, btn) => {
    const cAns = questions[index].answer;
    if (sAns === cAns) {
        score++;
    }
    Result(btn, sAns === cAns ? "correct" : "incorrect");
}

const Result = (btn, result) => {
    const bgcolor = { correct: "green", incorrect: "red" };
    btn.style.backgroundColor = bgcolor[result];
    if (result === "incorrect") {
        navigator.vibrate(1000);
    }
}

const updateTimer = () => {
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
    } else {
        document.getElementById("time").innerText = timeLeft;
        timeLeft--;
    }
}

const endQuiz = () => {
    document.querySelector(".qz").innerHTML = `Time's up! Your score is ${score} out of ${questions.length}.`;
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        hiddenTime = new Date().getTime();
    } else {
        let visibleTime = new Date().getTime();
        let timeDiff = Math.floor((visibleTime - hiddenTime) / 1000);
        alert(`You left the tab ${timeDiff} seconds ago.`);
    }
});

document.querySelector("#frm").addEventListener("submit", addQst);

window.onload = async() => {
    await setupMedia();
    await fetchQuestions();
    timer = setInterval(updateTimer, 1000);
};