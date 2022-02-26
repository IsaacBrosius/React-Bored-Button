import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
//Questions: Do you have gamepass? May you have screen time? Is the wifi on? Did you have any misclicks?

let gamepass;

let screenTime;

let wifi;

const construction = () => alert("Sorry, this button is under construction.");

const restart = () => {
    window.location.reload(false);
} 

let person;

let questionNumber = 1;

let screenTimeThings = ["Play Skyrim", "Play Minecraft", "Watch Youtube", "Work on your Youtube channel", "Beat Halo 3 on legandary difficulty", "Start or continue editing a video", "Practice Blender", "Play Red Alert 3", "Play Kane's Wrath", "Learn more C#", "Play Stronghold Crusader", "Play Stronghold Warlords", "Get the Rasberri Pi to work"];

let GPGSTT = ["Play Skyrim", "Play Minecraft", "Watch Youtube", "Work on your Youtube channel", "Play Minecraft Dungeons", "Play Rocket League", "Start or continue editing a video"];

let noScreenTime = ["Learn (or do) more JavaScript", "Clean or organize your room", "Learn more Dragon Tongue", "Start or continue editing a video", "Learn more C#"];

let noWifi = ["Play Skyrim", "Play Minecraft", "Start or continue editing a video", "Play Red Alert 3", "Play Kane's Wrath"];

let NWNST = ["Clean or organize your room", "Learn more Dragon Tongue", "Start or continue editing a video"];

let NWYGP = ["Play Minecraft Dungeons", "Play Skyrim", " Play Minecraft", "Start or continue editing a video", "Play Red Alert 3", "Play Kane's Wrath", "Learn more C#"];

const iQuestions = ["", "Do you have gamepass?", "May you have screen time?", "Is the wifi on?", "Did you have any misclicks?"];

const hide = () => {
    let x = document.getElementById("questionDiv");
    x.style.display = "inline";
}

const reloading = () => {

    let x = document.getElementById("questionDiv");
    x.remove();

    let timeleft = 5;
    let downloadTimer = setInterval(function(){
    if (timeleft <= 0){
        clearInterval(downloadTimer);
        document.location.href = "";
    } 
    else {
        document.getElementById("Reloading").innerHTML = "Reloading " + timeleft + " seconds";
    }
    timeleft -= 1;
    }, 1000);

}

const answer = () => {

    if (person === "isaac") {

        if (wifi === true && gamepass === true && screenTime === true) {

            let number = Math.floor((Math.random() * GPGSTT.length))
            let thing = GPGSTT[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

            }

        else if (wifi === true && gamepass === true && screenTime === false) {
           
            let number = Math.floor((Math.random() * noWifi.length))
            let thing = noWifi[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

        }

        else if (wifi === true && gamepass === false && screenTime === true) {

            let number = Math.floor((Math.random() * screenTimeThings.length))
            let thing = screenTimeThings[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

        }

        else if (wifi === true && gamepass === false && screenTime === false) {

            let number = Math.floor((Math.random() * noScreenTime.length))
            let thing = noScreenTime[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

        }

        else if (wifi === false && gamepass === true && screenTime === true) {

            let number = Math.floor((Math.random() * NWYGP.length))
            let thing = NWYGP[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

        }

        else if (wifi === false && gamepass === true && screenTime === false) {

            let number = Math.floor((Math.random() * NWNST.length))
            let thing = NWNST[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

        }

        else if (wifi === false && gamepass === false && screenTime === true) {

            let number = Math.floor((Math.random() * noWifi.length))
            let thing = noWifi[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

        }

        else if (wifi === false && gamepass === false && screenTime === false) {

            let number = Math.floor((Math.random() * NWNST.length))
            let thing = NWNST[number];
            document.getElementById("answerHere").innerHTML = thing;
            reloading();

        }
        
    }

    if (person === "abby") {}

    if (person === "elise") {}

}

export function HomePage() {

    const gamepassFalse = () => {
        gamepass = false;
        questionNumber++;
        updateIQuestion();
    }
    
    const gamepassTrue = () => {
        gamepass = true;
        questionNumber++
        updateIQuestion();
    }
    
    const screenTimeFalse = () => {
        screenTime = false;
        questionNumber++;
        updateIQuestion();
    }
    
    const screenTimeTrue = () => {
        screenTime = true;
        questionNumber++;
        updateIQuestion();
    }
    
    const wifiFalse = () => {
        wifi = false;
        questionNumber++;
        updateIQuestion();
    }
    
    const wifiTrue = () => {
        wifi = true;
        questionNumber++;
        updateIQuestion();
    }
    
    const yesAnswers = ["", gamepassTrue, screenTimeTrue, wifiTrue, restart];
    
    const noAnswers = ["", gamepassFalse, screenTimeFalse, wifiFalse, answer];

    const [iQuestion, setIQuestion] = useState({
        question: iQuestions[questionNumber - 1],
        yesName: "",
        yes: yesAnswers[questionNumber - 1],
        noName: "",
        no: noAnswers[questionNumber - 1],
        className: ""
      });
    
      const updateIQuestion = () => {
        setIQuestion(previousState => {
          return { ...previousState, question: iQuestions[questionNumber - 1], yesName: "yes", yes: yesAnswers[questionNumber - 1], noName: "no", no: noAnswers[questionNumber - 1]}
        });
      }

      const chooseIsaac = () => {

        questionNumber++;
        person = "isaac"; 
        let x = document.getElementById("question 1");
        x.remove();
        iQuestion.className = "isaacButton ";
        updateIQuestion();
    };

    return (
    
        <div onLoad = {hide}>

            <div className = "jumbotron">

            <center>

                <h1 id = "answerHere"></h1>

                <div id = "question 1">

                    <h1>Choose who you are</h1>

                    <br/>

                    <table>

                        <tbody>

                            <tr>
                                <td>
                                    <button className = "isaacButton answer" onClick = {chooseIsaac}>
                                        Isaac
                                    </button>
                                </td>                       
                            
                                <td>
                                    <button className = "abbyButton" onClick = {construction}>
                                        Abby
                                    </button>
                                </td>

                                <td>
                                    <button className = "eliseButton" onClick = {construction}>
                                        Elise
                                    </button>
                                </td>

                            </tr>
                        </tbody>

                    </table>

                </div>

                <div id = "questionDiv">

                    <p className = {iQuestion.className + "question"}>{iQuestion.question}</p>

                    <br/>

                    <table>

                        <tbody>

                            <tr>

                                <td>
                                    <a className = {iQuestion.className + "answer"} onClick = {iQuestion.yes}>
                                        {iQuestion.yesName}
                                    </a>
                                </td>

                                <td>
                                    <a className = {iQuestion.className + "answer"}  onClick = {iQuestion.no}>
                                        {iQuestion.noName}
                                    </a>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                <h3 id = "Reloading"></h3>

            </center>

            </div>
        </div>
    
    );

}

export default HomePage;