<template>
    <div>
        <p v-if="trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de um trabalho</p>

        <p v-show="active">Utilizo as seguintes tecnologias:</p>
        <ul>
            <li v-for="tec in tecnologias">{{tec}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Info',
    data() { 
        return {
            trabalhando: true,
            active: true,
            tecnologias: ['PHP','C#', 'HTML', 'CSS', 'JS','Java']
        }
    }
}

</script>