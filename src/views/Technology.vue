<template>
    <section>
        <h2><span>03</span> Space Lauch 101</h2>
        <TecnologyContainer/>
    </section>
</template>

<script>
import TecnologyContainer from '../components/TechnologyContainer.vue'

export default {
    name: 'Technology',
    components: {TecnologyContainer}
}
// background-image: url('../assets/technology/background-technology-mobile.jpg');
</script>

<style>
    body{
       
        background-size: cover;
        background-position: center;
    }
</style>