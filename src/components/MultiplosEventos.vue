<template>
    <div>
        <hr>
        <span>* Multiplos Eventos:</span>
        <button @click="primeiroEvent($event), segundoEvent($event), terceiroEvent($event)" >Enviar Eventos</button>
        <p>{{multiplos_eventos}}</p>
    </div>
</template>
<script>
    export default {
        name: 'MultiplosEventos',
        data() { 
            return {
                multiplos_eventos: ''
            }
        },
        methods: { 
            primeiroEvent(e) {
                this.multiplos_eventos = 'Text primary'
            },
            segundoEvent(e) { 
                setTimeout(() => {  this.multiplos_eventos = 'Secondary Text' }, 500)
            },
            terceiroEvent(e) { 
                setTimeout(() => { this.multiplos_eventos = '' }, 1500)
                console.log('Teceiro event');
            }
        }


    }
</script>
<style>


</style>