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

const  tabela = document.getElementById('tabela')

onValue(dbQuestion, (snapshot)=>{
    //let values = Object.values(snapshot.val())
    const dados = Object.entries(snapshot.val());
  

    let tbody = document.querySelector('tbody')

    //values.forEach(item => {console.log(item)});
    tbody.innerHTML = '';

    dados.forEach(item => {


          // Criar uma nova linha para cada item
          let tr = document.createElement('tr');

          // Criar o cabeçalho da linha com o ID do item
          let th = document.createElement('th');
          th.setAttribute('scope', 'row');
          th.textContent = item[0]; // ID do item
  
          // Criar a célula da pergunta
          let td = document.createElement('td');
          td.textContent = item[1].pergunta; // Pergunta do item
  
          // Adicionar o cabeçalho e a célula à linha
          tr.appendChild(th);
          tr.appendChild(td);
  
          // Adicionar a linha à tabela
          tbody.appendChild(tr);

    })


    //verificar sobre como os dados são atualizados na pagina principal
   
});



