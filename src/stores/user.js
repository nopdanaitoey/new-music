import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(v) {
      const userCred = await auth.createUserWithEmailAndPassword(v.email, v.password)

      await usersCollection.doc(userCred.user.uid).set({
        name: v.name,
        email: v.email,
        age: v.age,
        country: v.country
      })

      await userCred.user.updateProfile({
        displayName: v.name
      })

      this.userLoggedIn = true
    },
    async authenticate(v) {
      try {
        const userCred = await auth.signInWithEmailAndPassword(v.email, v.password)
        console.log('userCred', userCred)
        this.userLoggedIn = true
      } catch (error) {
        console.log('error', error)
        throw error
      }
    },
    async signOut() {
      await auth.signOut()

      this.userLoggedIn = false
    }
  }
})
