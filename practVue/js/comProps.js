Vue.component('autor',{
    props:['nombre', 'edad'],
    mounted(){

        console.log(typeof this.edad)

    },
    template:`<div>
              <h1 >{{ nombre }}:<i style="font-family:monospace;">{{edad}} años</i></h1><button @click="cambiarProp">Cambiar propiedad</button>
              
              </div>`,
            
    methods:{
        cambiarProp(){
            this.nombre = this.nombre.toUpperCase();
        }
    }

});
const vm = new Vue ({
    el: 'main',
    data:{
        autor:'Melisa Carmona Sosa',       
    },
});