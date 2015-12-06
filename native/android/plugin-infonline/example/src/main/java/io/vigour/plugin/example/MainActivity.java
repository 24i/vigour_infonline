package io.vigour.plugin.example;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import butterknife.Bind;
import butterknife.ButterKnife;
import butterknife.OnClick;
import io.vigour.nativewrapper.plugin.core.BridgeEvents;
import io.vigour.plugin.infonline.Infonline;

public class MainActivity extends AppCompatActivity {

    Infonline plugin;
    @Bind(R.id.output) TextView outputView;
    @Bind(R.id.event) TextView eventView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);

        plugin = new Infonline();
        plugin.setEventInterface(new BridgeEvents() {

            @Override public void receive(String event, String data, String pluginId) {
                eventView.setText(event + ": " + data);
                eventView.setTextColor(0x99000000);
            }
        });

        feedback(plugin.init(true));

    }

    @OnClick(R.id.log)
    public void log() {
        // TODO: log data to Infonline
    }

    private void feedback(String message) {
        outputView.setText(message);
    }
}
