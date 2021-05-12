<template>
  <section id="sell">
        <div class="container">
            <div class="heading">
                <h1>Voor welke prijs wil je je huis verkopen?</h1>
            </div>
            <div class="form">
                <form action="">
                    <label for="">Beoogde vraagprijs:</label>
                    <input v-model="sellPrice" @keyup="checkForm" pattern="[0-9]*" class="big" type="number" placeholder="€456.000">
                </form>
            </div>
            <nav>
                <router-link @click.native="updateProgress('25%')" class="button outline" to="/">Terug</router-link>
                <router-link @click.native="updateProgress('75%')" class="button" :class="{isDisabled: disableButton}" :to="{name:'Contact', params: {from: 'selling'}}" >Verder</router-link>
            </nav>
        </div>
    </section>
</template>

<style scoped lang="scss">
  @import '@/styles/main.scss';

  section#sell{
    div.container{
        div.form{
            margin:auto;
            margin-top:20px;
            max-width:500px;
        }

        nav{
            margin:auto;
            display:flex;

            a.button{
                &:first-of-type{
                    margin-right:20px;
                }

                &.outline{
                    color:$lightText;
                    border: 1px $lightText solid;

                    &:hover{
                        background:transparent;
                    }
                }
            }
        }
    }
  }

</style>

<script>
  export default {

    data: () => ({
        sellPrice: "",
        disableButton: true
    }),

    methods: {
        updateProgress: progress => document.querySelector(".progress").style.width = progress,

        checkForm(){
            parseInt(this.sellPrice)>=1000 ? this.disableButton = false : this.disableButton = true;
        }
    },

    computed: {
    },

    mounted(){
        document.querySelector(".progress").style.width = "50%"
    }
  }
</script>