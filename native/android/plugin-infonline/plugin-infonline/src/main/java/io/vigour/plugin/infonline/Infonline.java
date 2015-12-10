package io.vigour.plugin.infonline;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;

import com.fasterxml.jackson.jr.ob.JSON;
import com.fasterxml.jackson.jr.ob.impl.DeferredMap;

import java.io.IOException;

import de.infonline.lib.IOLEventType;
import de.infonline.lib.IOLSession;
import io.vigour.nativewrapper.plugin.core.ActivityLifecycleListener;
import io.vigour.nativewrapper.plugin.core.Plugin;

/**
 * Created by Thomas on 3/12/15.
 */
public class Infonline extends Plugin implements ActivityLifecycleListener {
	private static final String NAME = "infonline";
	private static final String TAG = Infonline.class.getName();

	public Infonline(@NonNull final Context context) {
		super(NAME);
		IOLSession.initIOLSession(context.getApplicationContext(), "OfferIdentifier", true);
	}

	public String init(final Boolean flag) {
		return getString(flag);
	}

	public String track(final DeferredMap data) {
		final String commentKey = "comment";
		final String eventTypeKey = "eventType";
		final String categoryKey = "category";

		final String comment = data.containsKey(commentKey) ? (String)data.get(commentKey) : "";
		final String eventTypeValue = data.containsKey(eventTypeKey) ? (String)data.get(eventTypeKey) : "";
		final String category = data.containsKey(categoryKey) ? (String)data.get(categoryKey) : "";

		final IOLEventType eventType;
		try {
			eventType = IOLEventType.valueOf(eventTypeValue);
		} catch (IllegalArgumentException ex) {
			sendError(ex.getLocalizedMessage());
			return null;
		}

		IOLSession.logEvent(eventType, category, comment);
		return null;
	}

	private String getString(@NonNull final Object status) {
		try {
			return JSON.std.asString(status);
		} catch (IOException e) {
			e.printStackTrace();
			sendError(e.getMessage());
			return "";
		}
	}

	public void terminateSession() {
		IOLSession.terminateSession();
	}

	public void startSession() {
		IOLSession.startSession();
	}

	@Override
	public void onPause() {
	}

	@Override
	public void onStop() {
		IOLSession.onActivityStop();
	}

	@Override
	public void onResume() {
	}

	@Override
	public void onStart() {
		IOLSession.onActivityStart();
	}
}
