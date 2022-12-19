<template>
    <div v-if="descricao == 'female'">
        <img :src="avatar" :alt="descricao" width="100"/>
    </div>
    <div v-else>
        <img :src="avatar_m" :alt="descricao" width="100"/>
    </div>

    <ChildrenPicture @mudar-imagem="trocarimagem"></ChildrenPicture>
</template>


<script>
import ChildrenPicture from './ChildrenPicture.vue';

export default {
    name: 'Picture',
    components: {
        ChildrenPicture
    },
    data() { 
        return {
            avatar: '/img/female.png',
            avatar_m: '/img/man.png',
            descricao: 'female'
        }
    },
    methods: {
        trocarimagem() {
            if (this.descricao == 'man') {
                this.descricao = 'female'
            } else { 
                this.descricao = 'man'
            }
        }
    }
}

</script>