import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import db from "../firebase.ts";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  DocumentReference
} from "firebase/firestore";
import { 
  User
} from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    currentUser: null as User | null
  }),

  actions: {
    init() {
      getDocs(collection(db, "bases")).then((qs: QuerySnapshot) => {
        qs.forEach((qd: QueryDocumentSnapshot) => {
          const data: BaseBeverageType = qd.data() as BaseBeverageType;
          let base: BaseBeverageType = { 
            id: qd.id, name: data.name, color: data.color
          };

          this.bases.push(base);
        })

        this.currentBase = this.bases[0];
      });

      getDocs(collection(db, "creamers")).then((qs: QuerySnapshot) => {
        qs.forEach((qd: QueryDocumentSnapshot) => {
          const data: CreamerType = qd.data() as CreamerType;
          let creamer: CreamerType = { 
            id: qd.id, name: data.name, color: data.color
          };
          
          this.creamers.push(creamer);
        })

        this.currentCreamer = this.creamers[0];
      });

      getDocs(collection(db, "syrups")).then((qs: QuerySnapshot) => {
        qs.forEach((qd: QueryDocumentSnapshot) => {
          const data: SyrupType = qd.data() as SyrupType;
          let syrup: SyrupType = { 
            id: qd.id, name: data.name, color: data.color
          };
          
          this.syrups.push(syrup);
        })

        this.currentSyrup = this.syrups[0];
      });
    },
    makeBeverage(beverageName: string) {
      if (this.currentUser == null) return;
      
      let newBeverage: BeverageType = {
        id: this.currentUser.email + "." + beverageName,
        name: beverageName,
        temp: this.currentTemp,
        base: this.currentBase!,
        creamer: this.currentCreamer!,
        syrup: this.currentSyrup!
      };
      
      const beverageDoc: DocumentReference = doc(db, "beverages", newBeverage.id);
      setDoc(beverageDoc, { userEmail: this.currentUser.email, beverage: newBeverage });

      this.beverages.push(newBeverage);
    },
    showBeverage(newBeverage: BeverageType) {
      this.currentBase = newBeverage.base;
      this.currentTemp = newBeverage.temp;
      this.currentCreamer = newBeverage.creamer;
      this.currentSyrup = newBeverage.syrup;
    },
    setUser(user: User | null) {
      this.currentUser = user;
      this.updateBeveragesForUser(user);
    },
    updateBeveragesForUser(user: User | null) {
      if (user != null) {
        getDocs(collection(db, "beverages")).then((qs: QuerySnapshot) => {
          qs.forEach((qd: QueryDocumentSnapshot) => {
            const data = qd.data()
            if (data.userEmail == user.email && !this.beverages.includes(data.beverage)) {
              let isInList = false;
              this.beverages.forEach((bev) => {
                if (bev.id == data.beverage.id) isInList = true;
              });

              if (!isInList) this.beverages.push(data.beverage);             
            }                    
          })
        });
      } else {
        this.beverages = [];
      }
    }
  }
});
