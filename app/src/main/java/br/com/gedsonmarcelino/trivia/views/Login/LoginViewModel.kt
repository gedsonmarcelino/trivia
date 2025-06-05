package br.com.gedsonmarcelino.trivia.views.Login

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import br.com.gedsonmarcelino.trivia.services.auth.AuthenticationService
import kotlinx.coroutines.launch

class LoginViewModel(application: Application) : AndroidViewModel(application) {

    private val authenticationService = AuthenticationService()

    private val _resultSignIn = MutableLiveData<Boolean>()
    val resultSignIn: LiveData<Boolean> = _resultSignIn

    fun signIn(email:String, password:String){
        viewModelScope.launch {
            _resultSignIn.value = authenticationService.signIn(email, password)
        }
    }

}