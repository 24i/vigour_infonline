package io.vigour.plugin.example;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import com.fasterxml.jackson.jr.ob.impl.DeferredMap;

import butterknife.Bind;
import butterknife.ButterKnife;
import butterknife.OnClick;
import de.infonline.lib.IOLEventType;
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

        plugin = new Infonline(this);
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
        final String commentKey = "comment";
        final String eventTypeKey = "eventType";
        final String categoryKey = "category";
        final DeferredMap dm = new DeferredMap(false);
        dm.put("comment", "my comment");
        dm.put("category", "custom category");
        dm.put("eventType", IOLEventType.DataSucceeded.name());
        plugin.track(dm);
    }

    private void feedback(String message) {
        outputView.setText(message);
    }
}
