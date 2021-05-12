<template>
    <section id="home">
        <div class="container">
            <div class="heading">
                <h1 class="dot">Aan de slag met Huispedia</h1>
                <h2>Ben je op zoek naar je nieuwe droomhuis? Of wil je juist je woning verkopen? Huispedia helpt je om dit op een slimme manier te doen!</h2>
            </div>
            <div class="options">
                <OptionCard v-for="(cardOption, i) in cardOptions" :key="cardOption.title" v-bind:cardOptions="cardOptions[i]"></OptionCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @import '@/styles/main.scss';

    section#home{
        div.container{
            div.options{
                margin:auto;
                //width:100%;
                @include min-1024{
                    display:flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>


<script>
    export default {

        data: () => ({
            cardOptions: [
                {
                    image: "verkopen",
                    title: "Ik wil verkopen",
                    description: "Volledig gratis zelf jouw woning aanbieden of met een makelaar aan de slag. Wij zetten al je opties op een rijtje. Zo weet jij wat het best bij jou past. Voor verkoop en verhuur.",
                    callToAction: "Verkoop mijn woning",
                    link:"/verkopen"
                },
                {
                    image: "huis-zoeken",
                    title: "Ik zoek een woning",
                    description: "Vind jouw droomhuis met het meest complete woningaanbod, inclusief het slapend aanbod. Zoek met extra uitgebreide informatie. Van bereikbaarheid tot geschatte marktwaarde.",
                    callToAction: "Zoek mijn droomhuis",
                    link: "/woning-zoeken"
                },
            ]
        }),

        methods: {

        },

        computed: {

        },

        mounted(){
            document.querySelector(".progress").style.width = "25%"
        }
    }
</script>
