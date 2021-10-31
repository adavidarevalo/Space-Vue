<template>
    <section>
        <img 
        v-if="!Screem"
        :src='data[0].imageLandscape' :alt='data[0].title'/>
        <img 
        v-else
        :src='data[0].image' :alt='data[0].title'/>
        <div class="TechnologyNav">
            <div @click="getData(1)" :class="{active: id === 1}">1</div>
            <div @click="getData(2)" :class="{active: id === 2}">2</div>
            <div @click="getData(3)" :class="{active: id === 3}">3</div>
        </div>
        <div class="Details">
            <h3>THE TERMINOLOGY...</h3>
            <h1>{{data[0].title}}</h1>
            <p>{{data[0].paragraph}}</p>
        </div>
    </section>
</template>

<script>

import {getTechnology} from '../TechnologyIndofamtion.js'

export default {
    name: 'TecnologyContainer',
    data(){
        return{
            data: [],
            id: 1,
            Screem: false
        }
    },

    created(){
        this.getData()
        this.ScreenNow()
    },

    methods: {
        getData(id = 1){
            this.id = id
            this.data = getTechnology(id)
        },
        ScreenNow(){
            if(screen.width > 800){
                this.Screem = true
            } 
        }
    }

}


</script>


<style scoped>
.active{
    background: white;
    color: black;

}
section{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
}
.Details{
    animation: fadeIn 1s both;
}
img{
    width: 100%;
    border-radius: 5px;
    animation: fadeInRight 1s both !important;
}
.TechnologyNav{
    display: flex;
    width: 200px;
    justify-content: space-between;
    color: white;
    margin-block: 25px;
    animation: fadeInLeft 1s both;
}
.TechnologyNav > div{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    cursor: pointer;
}
.TechnologyNav > div:hover{
    background: #80808052;
}
h3{
    color: hsl(231 77% 90%);
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 2px;
}
h1{
    text-transform: uppercase;
    color: white;
    font-size: 1.4rem;
    letter-spacing: 2px;
}
p{
    color: hsl(231 77% 90%);
    width: 80%;
    margin: 0 auto;
}
@media (min-width: 800px) {
    section{
        display: grid;
        grid-template-columns: 1fr auto auto;
    }
    img{
        grid-column-start: 3;
        grid-row-start: 1;
    }
    .TechnologyNav{
        flex-direction: column;
        width: 50px;
        height: 200px;
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
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  } 
</style>