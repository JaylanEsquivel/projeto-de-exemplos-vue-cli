<template>
    <div>
        <Picture />
        <p v-if="trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de um trabalho</p>

        <p v-show="active">Utilizo as seguintes tecnologias:</p>
        <ul>
            <li v-for="tec in tecnologias">{{tec}}</li>
        </ul>
        <p>Para acessar meu portifolio <a v-bind:href="meu_link" target="_blank">Click aqui</a></p>
    </div>
</template>
<script>
import Picture from './Picture.vue';

export default {
    name: 'Info',
    components: {
        Picture
    },
    data() { 
        return {
            trabalhando: true,
            active: true,
            tecnologias: ['PHP', 'C#', 'HTML', 'CSS', 'JS', 'Java'],
            meu_link: "https://google.com"
        }
    }
}

</script>