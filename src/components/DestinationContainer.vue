<template>
    <section>
        <img :src='data[0].image' :alt='data[0].name'/>
        <div>
            <div @click='getInformationPlanet()'>
                <DestinationNav/>
            </div>
            <h1>{{data[0].name}}</h1>
            <p>{{data[0].descriptio}}</p>
            <div>
                <div>
                    <h2>AVG. DISTANCE</h2>
                    <p>{{data[0].distance}}</p>
                </div>
                <div>
                    <h2>EST. TRAVEL TIME</h2>
                    <p>{{data[0].timeTravel}}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import DestinationNav from './DestinationNav.vue'
import { searchPlanet } from '../InformationPlanets.js'

export default {
    name: 'DestinationContainer',
    components: {DestinationNav},
    data(){
        return{
            data: []
        }
    },

    created(){
        this.getInformationPlanet()
    },

    methods: {
        getInformationPlanet(){
            const name = this.$route.params.name
            this.data = searchPlanet(name)
        }
    }

    
}
</script>
