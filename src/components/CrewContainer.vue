<template>
    <section>
        <div class="Crew-Details">
            <div class="NavCrew">
                <div @click="getData()" :class="{active: id === 1}"></div>
                <div @click="getData(2)" :class="{active: id === 2}"></div>
                <div @click="getData(3)" :class="{active: id === 3}"></div>
                <div @click="getData(4)" :class="{active: id === 4}"></div>
            </div>
            <div class="Details">
                <h3>{{data[0].title}}</h3>
                <h2>{{data[0].name}}</h2>
                <p>{{data[0].paragraph}}</p>
            </div>
        </div>
        <img :src="data[0].image" :alt="data[0].name">
    </section>
</template>

<script>
import { getCrew } from '../CrewInformation'
export default {
    name: 'CrewContainer',
    data(){
        return{
            data: [],
            id: 1
        }
    },
    created(){
        this.getData()
    },
    methods: {
        getData(id = 1){
            console.log('Yes baby')
            this.id = id
            this.data = getCrew(id)
        }
    }
}
</script>
<style scoped>
.NavCrew{
    display: flex;
    width: 150px;
    justify-content: space-between;
    margin-block: 20px 0px;
}
.NavCrew > div{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: hsl(0deg 0% 68% / 85%);
    cursor: pointer;
}
.NavCrew > div:hover{
    background-color: hsl(0deg 6% 87%);
}
.active{
    background-color: white !important;
}
.Crew-Details{
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeInLeft 1s both;
}
section{
    display: grid;
    grid-template-rows: auto auto;
    width: 80%;
    margin: 0 auto;
    background: none;
}
img{
    grid-row-start: 1;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    animation: fadeInRight 1s both;
}
h3{
    color: white;
    font-size: 1rem;
    margin-block: 20px;
    letter-spacing: 3px;
    font-weight: 500;
}
h2{
    font-size: 1.4rem;
    color: white;
    font-size: 1.5rem;
    color: white;
    letter-spacing: 3px;
    font-weight: 600;
    margin-block: 5px;
}
p{
    color: hsl(231 77% 90%);
    max-width: 450px;
    margin: 0 auto;
}
@media (min-width: 800px) {
    section{
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        align-self: center;
        justify-self: center;
    }
    img{
        grid-column-start: 2;
    }
    .Crew-Details{
        display: grid;
        max-height: 400px;
        width: 90%;
        margin: 0 auto;
    }
    .NavCrew{
        grid-row-start: 2;
        align-self: center;
        justify-self: center;
    }
}
@keyframes fadeInLeft {
  0% {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  }
  100% {
  opacity: 1;
  transform: none;
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