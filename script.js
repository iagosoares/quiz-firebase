import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


const firebaseConfig = {
            apiKey: "AIzaSyDJh9phia9qd4hLr9a5AzBsFlXrJsadkyA",
            authDomain: "teste-a12af.firebaseapp.com",
            databaseURL: "https://teste-a12af-default-rtdb.firebaseio.com",
            projectId: "teste-a12af",
            storageBucket: "teste-a12af.appspot.com",
            messagingSenderId: "510452432561",
            appId: "1:510452432561:web:119d80b8ffdc015676ac90"
        };


        const json = {

            pergunta: "Qual dessas cidades não fazem parte do Brazil ?",
            respostas: ["São Paulo", "Rio de Janeiro", "Salvador","Campo Grande", "Buenos Aires"],
            alternativaCorreta: 4,


        };

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const dbQuestion = ref(database, 'question')


const inputAnswers = document.getElementById("input-answers")
const btnAddAnswers = document.getElementById("add-answers");
const btnRemoveAnswer = document.getElementById("btn-respostas-excluir");


btnAddAnswers.addEventListener('click', function(){
    createSelect();
});


btnRemoveAnswer.addEventListener('click', function(){
    let select = document.getElementById('selectAlternativaCorreta');
    let selectedValue = select.selectedIndex;

    let option = document.querySelectorAll('option')

    if(selectedValue <= 0)
        return;    

    deletarSelect();
});

//console.log(database)


const buttonAdd = document.getElementById("add-button")

buttonAdd.addEventListener('click', function(){

    const inputQuestion = document.getElementById("input-question")
    let answer = document.querySelectorAll('option')
    let arrayAnswer = [];

    let select = document.getElementById('selectAlternativaCorreta');
    let selectedValue = select.selectedIndex - 1;
    

    answer.forEach(item => {
        if(item.classList.contains('item-answer')){
            arrayAnswer.push(item.value)

        }
    })

    const json = {

        pergunta: inputQuestion.value,
        respostas: arrayAnswer,
        alternativaCorreta: selectedValue,


    };
    
    push(dbQuestion, json)
    
});


 function getData(){
            onValue(dbQuestion, (snapshot)=>{
                let values = Object.values(snapshot.val())
                let id = Object.entries(snapshot.val());

                //values.forEach(item => {console.log(item)});

                id.forEach(item => {console.log(item)});
                
               
            });
        }


function createSelect(){
    let select = document.getElementById('selectAlternativaCorreta');
    let option = document.createElement('option');

    option.text = inputAnswers.value;
    option.className = "item-answer"
    select.add(option);

    inputAnswers.value = '';



}

function deletarSelect(){
    let select = document.getElementById('selectAlternativaCorreta');
    let selectedValue = select.selectedIndex;

    select.remove(selectedValue);

    console.log("item "+selectedValue + '\nfoi removido')
}


