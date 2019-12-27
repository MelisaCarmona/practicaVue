//elegir-ganador: es el nombre de la etiqueta
Vue.component('elegir-ganador', {
    props: ['listado'],
    //en los templates solo puede existir un elemento principal, en ca so de que hayan mas meter todo en un div 
    //se llama la etiqueta del HTML
    template:'#elegir-ganador-template',
    methods:{
        elegirGanador(){
            let cantidad= this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice -1];
        }
    },
    data() {
        return {
            ganador:false,
            participantes:this.listado
        }
    },

});
new Vue ({
 el:'main',
 data:{
     personas:[
         'Oscar', 'Johan', 'Andres', 'Melisa'
     ]
 },
});