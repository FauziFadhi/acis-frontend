<template>
    <div>
    <h3 class="text-center">Participant List From {{$route.params.category}}</h3>
    <participants :participants="$route.params.participants"/>
    </div>
</template>

<script>
import participants from '../../components/participants'
export default {
    layout: 'custom',
    data(){
        return {
        }
    },
    components:{
        participants
    },
    mounted(){
        window.print();
        this.$router.go(-1);
    }
}
</script>

<style>

</style>
