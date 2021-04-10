/*function renderList(doc){
    let li= document.createElement('li')
    li.className = "collectionitem";
    li.setAttribute('data-id', doc.id);
    let div= document.createElement('div');
    let title= document.createElement('span');
    title.textContent = doc.data().title;
    let anchor = document.createElement('a');
    anchor/href = "";
    anchor/classname="";
    anchor.appendChild(edit)
    div.appendChild(title);
    li.appendChild(div);
    })
todoList.append(li);
}
FormData.addEventListener('submit',e=>{
        e.preventDefault();
        db.collection('historiales').add({
            title: FormData.title.value
        })
        FormData.title.value='';
})

db.collection('historiales').orderBy('title').onSnapshot(snapshot=> {
    let changes= snapshot.docChanges()
    changes.forEach(change=>{
        if (change.type == 'added'){
            renderList(change.doc) ;  
            console.log(change.doc.data())
            
        }else if(change.type == 'removed'){
                console.log('removed')
        }else if(change.type == 'modified'){
            console.log('modified')
        }
    });
})

*/
//modal



const historialCalcu = querySelector('#historial-pantalla')

//a la variable local pantalla le asociamos el selectorquery pantalla
let pantalla = document.querySelector("#resultado-pantalla")

//creamos la funcion getData(red) para obtener por parametro el valor
//definimos como variable local al valor que sera enviado x parametro como el valor ref
//definimos la variable valor, la concatenamos y se accede por pantalla
function getData(ref){
    let value = ref.value;
    pantalla.value += value;
    {
        historialCalcu.value = pantalla.value +"="+ eval(pantalla.value) ;
        }
    
}
//igualamos el valor de limpiar a 0
function limpiar(){
    pantalla.value = '';
}

function resultado(){
    try{
        pantalla.value = eval(pantalla.value)
        
    }catch(error){
        pantalla.value='ERROR';
        setTimeout(() => {
            limpiar()
        }, 500);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  let modal=new Materialize.Modal($("#ingrese"));
  let modal2=new Materialize.Modal($("#registrese"));
modal.open(); //Open it on some event

modal.close();

