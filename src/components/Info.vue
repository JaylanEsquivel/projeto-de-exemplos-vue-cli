<template>
    <div>
        <Picture></Picture>
        <p v-if="trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de um trabalho</p>

        <p v-if="mostra_email">{{email}}</p>
        <button @click="showemail">{{textbutton}}</button>
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
            mostra_email: false,
            textbutton: "Mostrar Email",
            tecnologias: ['PHP', 'C#', 'HTML', 'CSS', 'JS', 'Java'],
            meu_link: "https://about.me/jaylanesquivel",
            email: "jaylan1997@hotmail.com"
        }
    },
    methods:{
        showemail() {
            this.mostra_email = !this.mostra_email;

            if (!this.mostra_email) {
                this.textbutton = "Mostrar Email";
            } else { 
                this.textbutton = "Esconder Email";
            }
        }
    }
}
</script>

<style scoped>
    p{
        background-color: #f1e204;
        padding: 10px;
    }

</style>