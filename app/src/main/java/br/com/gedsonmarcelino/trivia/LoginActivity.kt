package br.com.gedsonmarcelino.trivia

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import br.com.gedsonmarcelino.trivia.utils.AppConstants

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        supportActionBar?.hide()
        setContentView(R.layout.activity_login)
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

    }
}