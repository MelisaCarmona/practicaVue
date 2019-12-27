    Vue.component('producto',{
        props:['lista', 'busqueda'],
        template:`<ul v-if="lista && lista.t120">
                  <li>f120_referencia: {{lista.t120.f120_referencia}}</li>
                  <li>f120_id: {{lista.t120.f120_id}}</li>
                  <li>f120_descripcion: {{lista.t120.f120_descripcion}}</li>
                  <li>Activo : si </li>
                  </ul>
                    <div v-else-if="lista && lista.t120 == null" class="alert alert-danger">La referencia <b>{{busqueda}}</b> no existe</div>`,
    });
    const vm= new Vue ({
    el:'main',
    
    
    data:{

        busqueda: '',
        listaProductos: null,

    },
    methods:{
        buscarProducto(){
            //return this.listaProductos.fiter((lista) => lista.t120.f120_referencia.includes(this.busqueda));
            if(this.busqueda){
                axios.get('http://www.intranet.com/api/maestros/item/referencia/' + this.busqueda)
            .then((respuesta) => this.listaProductos =respuesta.data)
    
            }else{
                this.listaProductos = null;
                alert('debe ingresar la referencia');
            }
        },
    },
   
    

});

