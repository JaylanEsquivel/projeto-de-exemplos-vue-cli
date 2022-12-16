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
        <ul>
            <li v-for="cont in contatos" :key="cont.id">
                {{cont.titulo}} : {{cont.value}}
            </li>
        </ul>
        <Form></Form>
  </div>
</template>
<script>
import Picture from './Picture.vue';
import Form from './Form.vue';

export default {
    name: 'Info',
    components: {
        Picture,
        Form
    },
    data() { 
        return {
            trabalhando: true,
            active: true,
            mostra_email: false,
            textbutton: "Mostrar Email",
            tecnologias: ['PHP', 'C#', 'HTML', 'CSS', 'JS', 'Java'],
            contatos:[
                {id: 1, titulo: 'Celular', value: '75 98195-0449'},
                {id: 2, titulo: 'Email', value: 'jaylan1997@hotmail.com'}
            ],
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
        background-color: #8a8a89;
        padding: 10px;
    }

</style>