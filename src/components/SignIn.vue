<template>
  <v-app id="inspire" style="background-color: #c5cae9">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            black--text
                            text--accent-3
                          "
                        >
                          Sign in to AdoptMe Ya!
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form>
                          <v-text-field
                            v-model="user"
                            label="User"
                            name="user"
                            prepend-icon="mdi-account"
                            type="text"
                            color="primary accent-3"
                          />

                          <v-text-field
                            v-model="password"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="primary accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-5">
                        <v-btn
                          rounded
                          color="amber accent-3 text-black"
                          @click="handleLogin(user, password)"
                          dark
                          >SIGN IN
                        </v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="amber accent-3">
                      <v-card-text class="text-black mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5 class="text-center">
                          Enter your personal details and start journay with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          rounded
                          outlined
                          dark
                          @click="step++"
                          class="text-black"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="amber accent-3">
                      <v-card-text class="text-black mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">
                          To Keep connected with us please login with your
                          personnel info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          rounded
                          outlined
                          dark
                          @click="step--"
                          class="text-black"
                          >Sign in</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-black text-center
                            display-2
                            text--accent-3
                          "
                        >
                          Create Account
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form>
                          <v-text-field
                            v-model="User"
                            label="User"
                            name="User"
                            prepend-icon="mdi-account"
                            type="text"
                            color="primary accent-3"
                          />
                          <v-text-field
                            v-model="Email"
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="email"
                            color="primary accent-3"
                          >
                          </v-text-field>

                          <v-text-field
                            v-model="Password"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="primary accent-3"
                          />

                          <v-radio-group row v-model="radioGroup">
                            <v-icon> mdi-license </v-icon>
                            <v-spacer></v-spacer>
                            <v-radio
                              v-for="n in typeUsers"
                              :key="n"
                              :label="`${n}`"
                              :value="n"
                              @click="ChangeTypeUser(n)"
                            ></v-radio>
                          </v-radio-group>
                          <div class="text-center mb-5">
                            <v-btn
                              class="text-black"
                              rounded
                              color="amber accent-3"
                              dark
                              v-on:click="SignUp(User, Email, Password)"
                              >SIGN UP
                            </v-btn>
                          </div>
                        </v-form>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import UsersService from "../core/services/users.service";
import usersService from "../core/services/users.service";
export default {
  name: "app-SignIn",
  data: () => ({
    user: "",
    password: "",
    step: 1,
    Email: "",
    typeUser: "Cliente",
    typeUsers: ["Cliente", "Veterinario", "Proveedor"],
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/allPublications");
    }
  },
  methods: {
    ChangeTypeUser(typeUser) {
      this.typeUser = typeUser;
    },
    async handleLogin(user, password) {
      console.log(user, password);
      if ((await usersService.signInService(user, password)).status === 200) {
        await usersService.signInService(user, password).then((response) => {
          localStorage.setItem("user", response.data.id);
          localStorage.setItem("typeUser", response.data.type);
          localStorage.setItem("token", response.data.token);
        });
        await this.$router.push("/allPublications");
      }
    },
    SignUp(user, email, password) {
      console.log(user, email, password, this.typeUser);
      UsersService.postUser({
        UserNick: user,
        Email: email,
        Pass: password,
        Type: this.typeUser,
        urlToImageBackground:
          "https://png.pngtree.com/background/20210715/original/pngtree-simple-pet-cat-paw-hand-drawn-background-picture-image_1282067.jpg",
        urlToImageProfile:
          "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896__340.png",
      }).then((response) => {
        if (response.status == 200) {
          this.step--;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>