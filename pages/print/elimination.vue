<template>
    <div>
    <h3 class="text-center">Elimination Bracket From {{$route.params.category}}</h3>
    <elimination :detailId="$route.params.detailId" :bracketData="$route.params.bracketData"/>
    </div>
</template>

<script>
import elimination from '../../components/elimination'
export default {
    layout: 'custom',
    data(){
        return {
        }
    },
    components:{
        elimination
    },
    mounted(){
        window.print();
        this.$router.go(-1);
    }
}
</script>

<style>

</style>
