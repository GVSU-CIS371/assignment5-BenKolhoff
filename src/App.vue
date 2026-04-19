<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" :baseColor="beverageStore.currentBase!.color" :creamerColor="beverageStore.currentCreamer!.color" :syrupColor="beverageStore.currentSyrup!.color"/>
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base.id}`"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer.id}`"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup.id}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <div>
      <label>{{ signedInText }}</label>
      <button @click="withGoogle()">{{ signInButtonText }}</button>
    </div>
    <input v-model="beverageInputText" type="text" placeholder="Beverage Name" />
    <button @click="addBeverage()" :disabled="!isSignedIn">🍺 Make Beverage</button>
    <p>{{ currentMessage }}</p>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <template v-for="beverage in beverageStore.beverages" :key="beverage.id">
      <label>
        <button @click="showBeverage(beverage)">{{ beverage.name }}</button>
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { BeverageType } from './types/beverage';
import {
  GoogleAuthProvider,
  signInWithPopup, 
  getAuth,
  User,
  onAuthStateChanged
} from "firebase/auth";
const beverageStore = useBeverageStore();
const beverageInputText = ref('');

beverageStore.init();
let isSignedIn = false;
let currentMessage = "Please sign in to save your changes";
let signInButtonText = "Sign in with Google";
let signedInText = "";

function addBeverage() {
  if (beverageInputText.value != "") {
    beverageStore.makeBeverage(beverageInputText.value);
    currentMessage = "Successfully made " + beverageInputText.value + " beverage!";
  } else {
    currentMessage = "Please enter a name for the beverage";
  }
};

function showBeverage(beverage: BeverageType) {
  beverageStore.showBeverage(beverage);
}

function withGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
      
  if (beverageStore.currentUser == null) {
    signInWithPopup(auth, provider).then((result) => {      
      beverageStore.setUser(result.user);    
    }).catch((err) => {
        currentMessage = "An error ocurred:\n" + err.toString()
    });
  } else {
    auth.signOut();
  }
}

const auth = getAuth();

onAuthStateChanged(auth, (currentUser: User | null) => {
  if (currentUser != null) {
    currentMessage = "";
    isSignedIn = true;
    signedInText = "Signed in as " + currentUser.displayName;
    signInButtonText = "Log out";
  } else {
    isSignedIn = false;
    signedInText = "";
    signInButtonText = "Sign in";
    currentMessage = "Please sign in to save your changes";
  }

  beverageStore.setUser(currentUser);
});
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>