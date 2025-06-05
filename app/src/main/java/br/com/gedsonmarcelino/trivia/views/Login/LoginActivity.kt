package br.com.gedsonmarcelino.trivia.views.Login

import android.os.Bundle
import android.view.View
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import br.com.gedsonmarcelino.trivia.R
import br.com.gedsonmarcelino.trivia.databinding.ActivityLoginBinding
import br.com.gedsonmarcelino.trivia.utils.AppConstants

class LoginActivity : AppCompatActivity(), View.OnClickListener {

    private val loginViewModel: LoginViewModel by viewModels()
    private val binding: ActivityLoginBinding by lazy { ActivityLoginBinding.inflate(layoutInflater) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        supportActionBar?.hide()
        setContentView(binding.root)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(
                systemBars.left + AppConstants.UI.PADDING_HORIZONTAL,
                systemBars.top,
                systemBars.right + AppConstants.UI.PADDING_HORIZONTAL,
                systemBars.bottom
            )
            insets
        }

        onListeners()
        onObservers()
    }

    override fun onClick(view: View) {
        if (view.id == R.id.btn_sign_in) {
            handleSignIn()
        } else if (view.id == R.id.btn_sign_in_google) {
            handleSignInGoogle()
        } else if (view.id == R.id.txt_answer) {
            handleCreateAccount()
        }
    }

    private fun onListeners(){
        binding.btnSignIn.setOnClickListener(this)
        binding.btnSignInGoogle.setOnClickListener(this)
        binding.txtAnswer.setOnClickListener(this)
    }

    private fun onObservers(){
        loginViewModel.resultSignIn.observe(this) {
            val s = it
        }
    }

    private fun handleSignIn() {
        val email = binding.edtUsername.text.toString()
        val password = binding.edtPassword.text.toString()
        loginViewModel.signIn(email, password)
    }

    private fun handleSignInGoogle() {

    }

    private fun handleCreateAccount() {

    }
}