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
                <v-text-field v-model="data.title" label="Title"></v-text-field>
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
                <v-text-field
                  v-model="data.urlToImage"
                  label="Image"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  v-model="data.promoted"
                  label="Available"
                  outlined
                ></v-select>
              </v-col>
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
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this Add?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
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
            <br />
            <v-chip
              class="green white--text ma-2"
              label
              text-color="white"
              color="green"
              button
              href="https://api.whatsapp.com/send?phone= +51 921285233"
              target="blank"
            >
              <v-icon left> mdi-whatsapp </v-icon>
              Contact
            </v-chip>
          </v-card-text>
          <v-card-actions fluid class="btns">
            <v-btn color="orange lighten-2" text @click="editItem(add)"> Edit </v-btn>
            <v-btn color="orange lighten-2" text @click="deleteItem(add)">
              Delete
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
    dialogDelete: false,
    dialog: false,
    userId: UsersService.currentUser,
    listAdds: [],
    dateTime: "",
    title: "",
    description: "",
    discount: 0,
    urlToImage: "",
    editedIndex: -1,
    promoted: false,
    phoneNumber: 0,
    typeUser: "",
    items: ["True", "False"],
    id: 0,
    editedItem: {
      title: "",
      promoted: false,
      description: "",
      // discount: 0,
      dateTime: "string",
      urlToImage: "https://www.channelengine.com/media/labcysqb/blog-1.jpg",
      userId: 0,
    },
    data: {
      title: "",
      promoted: false,
      description: "",
      // discount: 0,
      dateTime: "string",
      urlToImage: "https://www.channelengine.com/media/labcysqb/blog-1.jpg",
      userId: 0,
    },
  }),
  components: {},
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    this.getTypeUser();
    this.retrieveDiscountedAdds();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Add" : "Edit Add";
    },  
  },
  methods: {
    retrieveDiscountedAdds() {
      UsersService.getUsersById(UsersService.getCurrentUser()).then(
        (response) => {
          this.phoneNumber = response.data.phone;
          console.log(this.phoneNumber);
        }
      );
      AddServices.getAllByUserId(this.id)
        .then((result) => {
          this.listAdds = result.data;
          console.log("list adds");

          console.log(result.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteItem(item) {
      this.editedIndex = this.listAdds.indexOf(item);
      console.log(this.editedIndex);
      this.data = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      AddServices.DeleteAd(this.listAdds[this.editedIndex].id).then(
        (response) => {
          console.log(response);
          this.listAdds.splice(this.editedIndex, 1);
          this.retrieveDiscountedAdds();
          this.closeDelete();
        }
      );
    },
    editItem(item) {
      this.editedIndex = this.listAdds.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    getTypeUser() {
      this.typeUser = localStorage.getItem("typeUser");
      this.id = localStorage.getItem("user");
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.data.promoted == "True") {
        this.data.promoted = true;
      } else {
        this.data.promoted = false;
      }
      this.data.discount = parseInt(this.data.discount);
      this.data.userId = parseInt(localStorage.getItem("user"));
      if(this.editedIndex > -1){
        AddServices.UpdateAd(this.listAdds[this.editedIndex].id,{
          id: this.data.id,
          dateTime: this.data.dateTime,
          title: this.data.title,
          description: this.data.description,
          discount: this.data.discount,
          urlToImage: this.data.urlToImage,
          promoted: this.data.promoted,
          userId: localStorage.getItem("user")
        }).then(res=>{
          console.log(res)
          this.retrieveDiscountedAdds();

        })
      }else{

      AddServices.postNewAd(this.data).then((response) => {
        console.log(response);
        this.retrieveDiscountedAdds();
      });
    } 

      this.close();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>