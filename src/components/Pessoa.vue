<template>
    <hr>
    <h2>Está é uma descrição da pessoa: {{name}}</h2>
   <Info />
</template>
<script>
import Info from './Info.vue';

export default {
    name: 'Pessoa',
    data() { 
        return {
            name: 'Jaylan'
        }
    },
    components:{ 
        Info
    }
}


</script>