<template>
  <div class="card">
    <div class="image">
      <img :src="require(`../assets/${cardOptions.image}.svg`)" alt="">
    </div>
    <h1 class="dot">{{cardOptions.title}}</h1>
    <p>{{cardOptions.description}}</p>
    <router-link class="button outline" :to="cardOptions.link" @click.native="updateProgress">{{cardOptions.callToAction}}</router-link>
  </div>
</template>

<style lang="scss">
  @import '@/styles/main.scss';

  div.card{
    width:500px;
    background:white;
    border-radius:10px;
    box-shadow: 3px 4px 10px rgba(0,0,0,0.2);
    width:100%;
    display:flex;
    flex-direction: column;
    padding: 15px 0px 25px 0px;
    max-width:500px;

    &:last-of-type{
      margin-bottom:70px
    }

    @include min-1024{
      flex-basis:49%;

      &:last-of-type{
        margin-bottom:40px;
      }
    }

    div.image{
      height:120px;
      width:100%;
      display:flex;
      align-items:center;
      justify-self: center;

      img{
        height:100%;
        width:100%;
        margin:auto;
      }
    }

    &:not(:last-of-type){
      margin-bottom:40px;
    }

    h1{
      color:$secondary;
      text-align:center;
      font-size: 28px;
    }

    p{
      text-align:center;
      width:80%;
      margin:auto;
      margin-top:10px;
    }

    a.button{
      display:inline-block;
      text-align:center;
      margin:auto;
      margin-top:20px;
    }
  }
</style>

<script>
  export default {

    props: ["cardOptions"],

    data: () => ({
      
    }),

    methods: {
      updateProgress(){
        document.querySelector(".progress").style.width = "50%"
      }
    },

    computed: {
    
    },

    mounted(){
    }
  }
</script>