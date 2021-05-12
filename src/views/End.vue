<template>
    <section id="home">
        <div class="container">
            <div class="image">
                <img src="@/assets/Beeldmerk.png" alt="Huispedia beeldmerk">
            </div>
            <div class="heading">
                <h1 class="dot">Bedankt {{firstNameWithCapital}} voor het invullen van je gegevens</h1>
            </div>

            <nav>
                <router-link @click.native="updateProgress" class="button" to="/">Naar de homepage</router-link>
            </nav>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @import '@/styles/main.scss';

    section#home{
        div.container{
            div.heading{
                h1{
                    text-align:center;
                }
            }
            div.image{
                margin:auto;
                max-width:100px;
                margin-bottom:20px;

                img{
                    width:100%;
                }
            }

            nav{
                margin:auto;
                margin-top:40px;
            }

        }
    }
</style>


<script>
    export default {

        data: () => ({

        }),

        methods: {
            updateProgress(){
                document.querySelector(".progress").style.width = "25%"
            },

            makeFirstLetterCapital(string){
                string.charAt(0).toUpperCase() + string.slice(1);
            }
        },

        computed: {
            firstNameWithCapital(){
                return this.$route.params.contactInfo.voornaam.charAt(0).toUpperCase() + this.$route.params.contactInfo.voornaam.slice(1);
            }
        },

        mounted(){
            document.querySelector(".progress").style.width = "100%"
        }
    }
</script>
