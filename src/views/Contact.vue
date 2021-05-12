<template>
  <section id="contact">
        <div class="container">
            <div class="heading">
                <h1 class="dot">Vul je contactgegevens in {{CheckPreviousPage}}</h1>
            </div>
            <div class="form">
                <form action="">
                    <label for="">Voornaam:</label>
                    <input v-model="contactInfo.voornaam" @keyup="checkForm" type="text" placeholder="Firenzo">

                    <label for="">Achternaam:</label>
                    <input v-model="contactInfo.achternaam" @keyup="checkForm" type="text" placeholder="Jorden">

                    <label for="">Email adres:</label>
                    <input v-model="contactInfo.email" @keyup="checkForm" type="email" placeholder="voorbeeld@example.com">

                    <label for="">Telefoonnummer:</label>
                    <input v-model="contactInfo.telefoonnummer" @keyup="checkForm" type="tel" placeholder="0612345678" pattern="[0-9]*">
                </form>
            </div>
            <nav>
                <a @click="goBack" class="button outline">Terug</a>
                <router-link @click.native="updateProgress('100%')" class="button" :class="{isDisabled: disableButton}" :to="{name:'End', params: {contactInfo}}">Versturen</router-link>
            </nav>
        </div>
    </section>
</template>

<style scoped lang="scss">
  @import '@/styles/main.scss';

  section#contact{
    div.container{
        div.form{
            margin-top:20px;
        }

        nav{
            margin:auto;
            margin-top:30px;
            display:flex;
            margin-bottom:60px;
            a.button{
                &:first-of-type{
                    margin-right:20px;
                }

                &.outline{
                    color:$lightText;
                    border: 1px $lightText solid;

                    &:hover{
                        background:transparent;
                        cursor: pointer;
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
      contactInfo:{
        voornaam: "",
        achternaam: "",
        email: "",
        telefoonnummer: ""
      },

      disableButton: true,
      sellingText:"om te zien hoe jouw woning in de markt staat",
      lookingForHouseText: "om het huidige aanbod aan woningen te zien"
    }),

    methods: {
        goBack(){
            this.$router.go(-1)
            this.updateProgress("50%");
        },

        updateProgress(progress){
            document.querySelector(".progress").style.width = progress;
        },

        checkForm(){
            if (this.contactInfo.voornaam &&
                this.contactInfo.achternaam &&
                this.contactInfo.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) &&
                this.contactInfo.telefoonnummer.match(/^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/)) {
                this.disableButton = false;
            } else {
                this.disableButton = true;
            }
        }
    },

    computed: {
        CheckPreviousPage(){
            return this.$route.params.from === 'selling' ? this.sellingText : this.lookingForHouseText 
        }
    },

    created(){
        
    },

    mounted(){
        document.querySelector(".progress").style.width = "75%"
    }
  }
</script>