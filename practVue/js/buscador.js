const vm = new Vue ({
    el: 'main',
    data:{
        animes: ['nanatsu no taizai', 'usumaki naruto','oroshimaru'],
        
        buscador:''
    },
    methods:{
        buscarAnime(){
            this.animes.unshift((this.buscador));
        }
    }
})