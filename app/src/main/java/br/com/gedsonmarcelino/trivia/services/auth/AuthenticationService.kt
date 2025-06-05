package br.com.gedsonmarcelino.trivia.services.auth

import android.util.Log
import com.google.firebase.Firebase
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.auth
import kotlinx.coroutines.tasks.await

class AuthenticationService {
    private var auth: FirebaseAuth = Firebase.auth

    fun isAuthenticated(): Boolean {
        return auth.currentUser != null
    }

    suspend fun signIn(email: String, password: String) : Boolean {
        try {
            val result = auth.signInWithEmailAndPassword(email, password).await()
            return result.user != null
        } catch (e: Exception){
            Log.d("[Error: Sign In]", e.message.toString())
            return false
        }
    }
}