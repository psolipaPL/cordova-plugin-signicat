package com.signicat.plugin;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;

import com.connectis.sdk.ConnectisSDK;


public class SignicatPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
            throws JSONException {

        if ("startAuthentication".equals(action)) {
            JSONObject config = args.getJSONObject(0);
            startAuth(config, callbackContext);
            return true;
        }

        return false;
    }

    private void startAuth(JSONObject json, CallbackContext callbackContext) {
        Activity activity = cordova.getActivity();

        try {
            String clientId = json.getString("clientId");
            String redirectUri = json.getString("redirectUri");
            String env = json.optString("environment", "PRODUCTION");




        } catch (Exception e) {
            callbackContext.error("Signicat init error: " + e.getMessage());
        }
    }
}
