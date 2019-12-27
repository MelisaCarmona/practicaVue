Vue.prototype.$http = axios;
const vm=new Vue ({
    el:'main' ,
    mounted() {
        this.cargarPersonas();
    },
    data:{
        personas: []
    },
    methods:{
        cargarPersonas(){
            /*this.$http.get('').then((respuesta) => {
                this.personas = respuesta.body.results});*/

                axios.get('https://randomuser.me/api/?results=99').then((respuesta) =>{
                
                    this.personas = respuesta.data.results;
                });
            }
        }
        
});