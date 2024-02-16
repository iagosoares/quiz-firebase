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

            pergunta: "Qual a cor do cavalo branco de Napoleão ?",
            respostas: ["roxo", "caramelo", "vermelho","branco", "preto"],
            alternativaCorreta: 3,


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

    //verificar se o option é diferente de zero, posso criar uma classe no option e verificar se possui essa classe, e montar o contador

   

    console.log("position: " + selectedValue)
    console.log("text: " + option[selectedValue].value)

    deletarSelect();
});

//console.log(database)

const inputQuestion = document.getElementById("input-question")
const buttonAdd = document.getElementById("add-button")

buttonAdd.addEventListener('click', function(){
    //let inputText = inputQuestion.value;
    
    //push(dbQuestion, json)
    
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
    select.add(option);

    inputAnswers.value = '';



}

function deletarSelect(){
    let select = document.getElementById('selectAlternativaCorreta');
    let selectedValue = select.selectedIndex;

    select.remove(selectedValue);

    console.log("item "+selectedValue + '\nfoi removido')
}


