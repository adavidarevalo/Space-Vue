<template>
    <section>
        <div>
            <h2>404</h2>
            <p>Page Not Found</p>
        </div>
    </section>
</template>
<style scoped>
section{
    min-height: 88.4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h2{
    font-size: 5rem;
    margin: 0px;
}
div{
    color: rgb(206, 206, 206);
    animation: fadeIn 1s both;
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  } 
</style>