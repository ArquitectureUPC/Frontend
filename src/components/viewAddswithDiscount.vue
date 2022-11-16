<template >
  <v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">New Promotion</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="data.title"
                  label="Title"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="data.description"
                  label="Description"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="data.discount"
                  type="number"
                  label="Discount"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="data.urlToImage" label="Image"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  v-model="data.promoted"
                  label="Available"
                  outlined
                ></v-select
              ></v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
      v-if="typeUser == 'Veterinario'"
      style="width: 100%; min-height: 47px"
      class="mb-2 black--text amber darken-1"
      @click.stop="dialog = true"
    >
      <v-icon top> mdi-plus </v-icon>
      New Promotion
    </v-btn>

    <v-row>
      <v-col v-for="add in listAdds" :key="add.id" cols="12" md="6">
        <v-card>
          <v-card-title class="font-weight-bold">
            {{ add.title }}
          </v-card-title>
          <v-img :src="add.urlToImage"> </v-img>
          <v-card-text>
            <v-chip class="ma-2" color="green" label text-color="white">
              {{ add.description }}
              <v-avatar right>
                <v-icon>mdi-bullhorn</v-icon>
              </v-avatar>
            </v-chip>
            <br />

            <v-chip
              class="ma-2"
              color="orange"
              label
              text-color="white"
              v-if="add.promoted === true"
            >
              Discount: {{ add.discount }}%
              <v-icon right> mdi-star </v-icon>
            </v-chip>

            <v-chip class="ma-2" color="red" label text-color="white" v-else>
              Discount: {{ add.discount }}%
              <v-icon right> mdi-close-circle </v-icon>
            </v-chip>
            <br />
            <v-chip
              class="ma-2"
              color="orange"
              label
              text-color="white"
              v-if="add.promoted === true"
            >
              Any promotion?: {{ add.promoted }}
              <v-avatar right>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
            </v-chip>

            <v-chip class="ma-2" color="red" label text-color="white" v-else>
              Any promotion?: {{ add.promoted }}
              <v-avatar right>
                <v-icon>mdi-close-circle</v-icon>
              </v-avatar>
            </v-chip>
          </v-card-text>
          <v-card-actions fluid class="btns">
            <v-btn
              class="green white--text ma-2"
              color="green"
              button
              text-color="white"
              href="https://api.whatsapp.com/send?phone= +51 921285233"
              target="blank"
            >
              <v-icon left> mdi-whatsapp </v-icon>
              Contact
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersService from "@/core/services/users.service";
import AddServices from "@/core/services/ad.service";

export default {
  name: "discountedAdd",
  data: () => ({
    dialog: false,
    userId: UsersService.currentUser,
    listAdds: [],
    dateTime: "",
    title: "",
    description: "",
    discount: 0,
    urlToImage: "",
    promoted: false,
    phoneNumber: 0,
    typeUser: "",
    items: ["True", "False"],
    data: {
      title: "",
      promoted: false,
      description: "",
      // discount: 0,
      dateTime: "string",
      urlToImage:'https://www.channelengine.com/media/labcysqb/blog-1.jpg',
      userId:0

    },
  }),
  components: {},
  methods: {
    getTypeUser() {
      this.typeUser = localStorage.getItem("typeUser");
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if(this.data.promoted=='True'){
        this.data.promoted = true
      }else{
        this.data.promoted = false
      }
      this.data.discount=parseInt(this.data.discount)
      this.data.userId =  parseInt(localStorage.getItem("user"));
      console.log(this.data);
      AddServices.postNewAd(this.data).then(response=>{
        console.log(response)
      })
      this.retrieveDiscountedAdds();
      this.close();

    },
    retrieveDiscountedAdds() {
      UsersService.getUsersById(UsersService.getCurrentUser()).then(
        (response) => {
          this.phoneNumber = response.data.phone;
          console.log(this.phoneNumber);
        }
      );
      AddServices.getDiscountedAdds()
        .then((result) => {
          this.listAdds = result.data;
          console.log(result.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getTypeUser();
    this.retrieveDiscountedAdds();
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
};
</script>

<style scoped>
</style>