package io.vigour.plugin.infonline;

import android.support.annotation.NonNull;
import android.util.Log;

import com.fasterxml.jackson.jr.ob.JSON;

import java.io.IOException;

import io.vigour.nativewrapper.plugin.core.Plugin;

/**
 * Created by Thomas on 3/12/15.
 */
public class Infonline extends Plugin {
	private static final String NAME = "infonline";
	private static final String TAG = Infonline.class.getName();

	public Infonline() {
		super(NAME);
	}

	public String init(final Boolean flag) {
		return getString(flag);
	}

	public String track(final Object data) {
		final String dataString = getString(data);
		Log.d(TAG, "Tracking data: " + dataString);
		return dataString;
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
}
