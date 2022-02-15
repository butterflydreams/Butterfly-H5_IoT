package com.butterfly.websocket;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;

import java.net.URI;
import java.net.URISyntaxException;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void OnButtonClick(View view) throws URISyntaxException {
        JWebSocketClient c = new JWebSocketClient(new URI("ws://192.168.90.63:10005?uid=AndroidJava"));
        c.connect();
    }
}