

let who=['Mi perro', 'Mi hamster','mi hermano','mi novio'];
let action=['se ha comido', 'ha orinado','ha vomitado','ha destruido'];
let what=['mi proyecto','mi movil','mi tarea','el dinero que me prestaste'];
let when=['al despitarme', 'mientras yo estaba en la ducha','mientras yo estaba durmiendo','cuando le he dejado solo'];


function f_excuseGen(a_who,a_action,a_what,a_when) {

    var excuse="";

    var len=a_who.length;
    var index=Math.floor(Math.random()*len);
    excuse=a_who[index];

    len=a_action.length;
    index=Math.floor(Math.random()*len);
    excuse=excuse+" "+ a_action[index];

    len=a_what.length;
    index=Math.floor(Math.random()*len);
    excuse=excuse+" "+ a_what[index];

    len=a_when.length;
    index=Math.floor(Math.random()*len);
    excuse=excuse+" "+ a_when[index];
    return excuse

}

id_excuse.innerHTML = f_excuseGen(who,action,what,when);
