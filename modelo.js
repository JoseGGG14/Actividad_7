const app = new Vue({
    el:'#seccion',

    data:{
        vue:{
            years: 0,
        },
        mostrar:false,
        mensaje:'',
        resultados:false,
        apellido:'',
        apellidos:[],
        res:'',
    },
    methods:{
        muestraPregunta:function(n){
            if(n)
                this.mostrar= true;
            else
                this.mostrar= false;
                this.mensaje= this.mostrar ? '' : 'Gracias por Apoyar';
        },
        muestraResultados:function(){
            this.resultados= !this.resultados;
        },
        agregar(){
            this.apellidos.push(this.apellido);
            this.apellido='';
        }
    },
})