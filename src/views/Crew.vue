<template>
    <section>
        <h2><span>02</span>Meet your crew</h2>
        <CrewContainer/>
    </section>
</template>

<script>
import CrewContainer from '../components/CrewContainer.vue'
export default {
    name: 'Crew',
    components: {CrewContainer}
}
//background-image: url('../assets/crew/backgroundCrewMobile.jpg');
</script>


<style>
    body{
        background-color: red;
        background-size: contain;
        background-position: center;
    }
</style>