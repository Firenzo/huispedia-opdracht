<template>
    <section id="search">
        <div class="container">
            <div class="heading">
                <h1>Wat is jouw budget?</h1>
            </div>
            <div class="form">
                <form action="">
                    <div class="inputGroup">
                        <label for="">min. prijs</label>
                        <input v-model="minPrice" pattern="[0-9]*" @keyup="checkForm" type="number" placeholder="€456.000">
                    </div>

                    <div class="inputGroup">
                        <label for="">max. prijs</label>
                        <input v-model="maxPrice" pattern="[0-9]*" @keyup="checkForm" type="number" placeholder="€768.000">
                    </div>
                </form>
            </div>
            <nav>
                <router-link @click.native="updateProgress('25%')" class="button outline" to="/">Terug</router-link>
                <router-link @click.native="updateProgress('75%')" class="button" :class="{isDisabled: disableButton}" :to="{name:'Contact', params: {from: 'lookingForHouse'}}">Verder</router-link>
            </nav>
        </div>
        </section>
</template>

<style scoped lang="scss">
    @import '@/styles/main.scss';

    div.container{
        div.form{
            margin:auto;
            margin-bottom:30px;
            max-width:800px;

            form{
                margin:auto;
                margin-top:30px;
                display:flex;
                flex-direction:column;
                justify-content:space-between;

                @include min-1024{
                    flex-direction:row;
                }

                div.inputGroup{
                    display:flex;
                    flex-direction:column;
                    margin:auto;

                    &:first-of-type{
                        margin-bottom:10px;
                    }

                    @include min-1024{
                        flex-basis:49%;

                        &:first-of-type{
                            margin-bottom:0;
                            margin-right:10px;
                        }
                    }

                    

                    label{
                        margin:auto;
                        margin-bottom:5px;
                    }

                    input{
                        margin:auto;
                        width:300px;
                    }
                }
            }
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

    nav {
        margin:auto;
        margin-top:30px;
        display:flex;
    }
</style>

<script>

    export default {

        data: () => ({
            disableButton:true,
            minPrice:"",
            maxPrice:""
        }),

        methods: {
            updateProgress(progress){
                    document.querySelector(".progress").style.width = progress;
            },

            checkForm(){
                parseInt(this.minPrice)>=1000 && parseInt(this.maxPrice) > parseInt(this.minPrice) ? this.disableButton = false : this.disableButton = true
            }
        },

        computed: {

        },

        mounted(){
            document.querySelector(".progress").style.width = "50%";   
        }
    }
</script>