<template>
    <section>
        <h2><span>02</span>Meet your crew</h2>
        <DestinationContainer/>
    </section>
</template>

<script>

import DestinationContainer from '../components/DestinationContainer.vue'

export default {
    name: 'Destination',

    components: {DestinationContainer}
}
//background-image: url('../assets/destination/background-destination-mobile.jpg');

</script>

<style>
    body{
        background-size: cover;
        background-position: center;
    }
</style>