import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import {firebaseConfig} from "./firebase.js";

//comentar e entender o que cada linha está fazendo, para poder continuar para o edit.
      

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
//inicialização do realtime database.

const dbQuestion = ref(database, 'question')
//referenciando o banco de dados desejado, nesse caso "question".



const btnAddAnswers = document.getElementById("add-answers");
//botão para [+] adicionar resposta.

const btnRemoveAnswer = document.getElementById("btn-respostas-excluir");
//botão para [-] remover uma resposta.

const buttonAdd = document.getElementById("add-button")
//botão de salvar 


btnAddAnswers.addEventListener('click', function(){createSelect()});

btnRemoveAnswer.addEventListener('click', function(){deletarSelect()});




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
    limpaInputs();
    
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

    let inputAnswers = document.getElementById("input-answers");
    //toda vez que clicarem no botão vai pegar o input do momento

    if(inputAnswers.value.trim().length === 0)
    return;
    //caso o input esteja vazio e o botão é clicado, não faz absutamente nada, n vai adicionar valor vazio no option do select.


    let select = document.getElementById('selectAlternativaCorreta');
    //depois da validação do input não estar vazio, acessamos o elemento select

    let option = document.createElement('option');
    //cria um elemento option


    option.text = inputAnswers.value;
    option.className = "item-answer";
    select.add(option);

    inputAnswers.value = '';

}

function deletarSelect(){
    let select = document.getElementById('selectAlternativaCorreta');
    let selectedValue = select.selectedIndex;
    //-1 quando nao é selecionado nenhum item, 1 quando tem apenas um item

    if(selectedValue === -1)
        return;
    //caso não tenha nenhum item no select ele não faz nada  

    select.remove(selectedValue);
    console.log("item "+selectedValue + ' foi removido')
}

function limpaInputs(){
    let inputs = document.querySelectorAll('input');
    
    inputs.forEach(item => {
        item.value = '';
    })

    let select = document.getElementsByClassName('item-answer')
    
    Array.from(select).forEach(item => {
        item.remove();
    });

}

function verificaECriaNodoQuestion() {
    const dbQuestionRef = ref(database, 'question');
    onValue(dbQuestionRef, (snapshot) => {
        if (!snapshot.exists()) {
            // Nó 'question' não existe, então criamos ele com um valor inicial vazio
            set(dbQuestionRef, {});
        }
    });
}


