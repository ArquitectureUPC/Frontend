
<template>

  <v-toolbar
      color="amber"
      max-height=70px
      class="text-black"

  >

    <v-app-bar-title >
      <v-btn :ripple="false"  class="text-black text-h6"  plain @click="goToAllPublications">Adoptme Ya!</v-btn></v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn class="text-black" plain @click="goToAllPublications">Pets</v-btn>
    <v-btn class="text-black" plain @click="seeDiscountedAdds">Promotions</v-btn>
    <v-spacer></v-spacer>

    <v-btn class="text-black" icon @click="goToMyPublications">
      <v-icon >mdi-newspaper-variant</v-icon>
    </v-btn>
    <v-btn class="text-black" icon @click="goToPets">
      <v-icon >mdi-paw</v-icon>
    </v-btn>
    <v-btn class="text-black" icon @click="seeMyNotifications">
      <v-icon >mdi-bell</v-icon>
    </v-btn>
    <v-btn class="text-black" icon @click="seeMyUserProfile">
      
      <v-icon >mdi-account-circle</v-icon>
      

    </v-btn>
    <v-btn class="text-black" icon @click="gotosignin">
      
      <v-icon >mdi-logout</v-icon>
      

    </v-btn>
  </v-toolbar>
</template>

<script>
import UsersService from "@/core/services/users.service";

export default {
  name: "app-bar",
  methods: {
    sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
      },
    async  gotosignin(){
      for (let i = 0; i < 1; i++) {
        await this.sleep(i * 1000);
    }
    this.$router.push('/');

    },
    goToMyPublications(){
      this.$router.push('/myPublications');
    },
    goToAllPublications(){
      this.$router.push('/allPublications');
    },
    goToPets(){
      this.$router.push('/myPets');
    },
    seeMyUserProfile(){
      UsersService.currentUser = 0;
      this.$router.push('/myUserProfile');
    },
    goToCreateAd(){
      this.$router.push('/createAD')
    },
    seeDiscountedAdds(){
      this.$router.push('/discountedAdds')

    },
    seeMyAds(){
      this.$router.push('/myAds')
    },
    seeMyNotifications(){
      this.$router.push('/myNotifications')
    }
  },

}
</script>

<style scoped>

</style>
