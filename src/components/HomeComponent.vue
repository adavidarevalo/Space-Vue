<template>
    <section>
        <div>
            <p class="PreTitle">So, you want to travel to</p>
            <h1>Space</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <button @click="changePage()">Explore</button>
    </section>
</template>

<script>

export default {
    name: 'HomeComponent',
    methods:{
        changePage(){
            this.$router.push({name: 'destination', params: {name: 'moon'}})

        }
    }
}
</script>

<style scoped>
section{
    width: 80%;
    margin: 0 auto;
    color: white;
    padding-block: 0px 40px;
    max-width: 1000px;
}
div{
    animation: fadeInLeft 1s both;
}
p{
    font-size: 1.2rem;
    line-height: 30px;
    color: hsl(231 77% 90%);
    max-width: 500px;
    margin: 15px auto;
}
.PreTitle{
    font-size: 1.3rem;
}
h1{
    font-size: 5rem;
    margin-block: 15px;
}
button{
    width: 150px;
    height: 150px;
    border: none;
    border-radius: 50%;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: white;
    font-size: 1.4rem;
    transition: all 1s ease;
    animation: fadeInRight 1s both;
}
button:active,
button:hover{
    box-shadow: 0px 0px 0px 20px rgba(255, 255, 255, 0.2);
}
@media (min-width: 800px) {
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
@media (min-width: 850px) {
    button{
        width: 250px;
        height: 250px;        
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
