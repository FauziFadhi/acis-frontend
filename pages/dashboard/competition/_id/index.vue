<template>
    <div>
        Tournament {{this.$route.params.id}}
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$router)
    }
}
</script>

<style>

</style>
