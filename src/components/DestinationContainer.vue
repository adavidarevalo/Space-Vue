<template>
    <section>
        <img :src='data[0].image' :alt='data[0].name'/>
        <div class="Details">
            <div @click='getInformationPlanet()'>
                <DestinationNav/>
            </div>
            <h1>{{data[0].name}}</h1>
            <p>{{data[0].descriptio}}</p>
            <div class="Destination-Details">
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

<style scoped>
section{
    width: 80%;
    margin: 0 auto;
}
.Details{
    animation: fadeInRight 1s both;
}
img{
    width: 100%;
    animation: rotateCenter 200s linear infinite;
    max-width: 400px;
    max-height: 400px;
}
h1{
    font-size: 3rem;
    text-transform: uppercase;
    color: white;
    letter-spacing: 3px;
    margin: 20px 0px;
}
p{
    color: hsl(231 77% 90%);
    max-width: 500px;
    margin: 0 auto;
}
h2{
    color: hsl(231 77% 90%);
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
}
.Destination-Details{
    padding-block: 20px;
}
.Destination-Details > div{
    padding-block: 10px;
}
.Destination-Details > div > p {
    color: white;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 2px;
}
@keyframes rotateCenter {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 800px) {
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Destination-Details{
        display: flex;
        justify-content: space-between;
    }
    .Details{
        max-width: 400px;
    }
}

@keyframes fadeInRight {
  0% {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  transform: none;
  }
  } 
</style>