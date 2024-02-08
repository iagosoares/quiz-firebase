
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDJh9phia9qd4hLr9a5AzBsFlXrJsadkyA",
            authDomain: "teste-a12af.firebaseapp.com",
            databaseURL: "https://teste-a12af-default-rtdb.firebaseio.com",
            projectId: "teste-a12af",
            storageBucket: "teste-a12af.appspot.com",
            messagingSenderId: "510452432561",
            appId: "1:510452432561:web:119d80b8ffdc015676ac90"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig)
        

        console.log('codigo funcioando')

        const button = document.getElementById('btn');

        button.addEventListener('click', (e) => {
            console.log("funcionando")
        });

        function writeUserData() {
            let userId = 1;
            let name = 'Iago Soares';
            let email = 'iago.jt21@gmail.com';
            let imageUrl = 'www.imagem.com.br';

            const db = getDatabase();
            set(ref(db, 'users/' + userId), {
                username: name,
                email: email,
                profile_picture: imageUrl
            });

        }


        //----------------------------------------------------------------------


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
        const app = initializeApp(firebaseConfig)
        const db = getDatabase(app);

        const dbPessoa = ref(db, 'pessoa')

        
        function getData(){
            onValue(dbPessoa, (snapshot)=>{
                let values = Object.values(snapshot.val())
                let id = Object.entries(snapshot.val());

                //values.forEach(item => {console.log(item)});

                id.forEach(item => {console.log(item)});
                
               
            });
        }


        function send() {

            for(let i = 1; i < 10; i++){
                push(dbPessoa, `usuario-${i}`)
            }
            
          push(dbPessoa,'option A')
        }

        console.log('codigo funcioando')

        const button = document.getElementById('btn');

        button.addEventListener('click', (e) => {
            getData();
            //send();
            
        });
