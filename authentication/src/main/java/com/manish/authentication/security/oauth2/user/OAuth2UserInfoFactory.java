package com.manish.authentication.security.oauth2.user;

import com.manish.authentication.exception.BadRequestException;
import com.manish.authentication.model.AuthProvider;

import java.util.Map;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if (registrationId.equalsIgnoreCase(AuthProvider.google.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else {
            throw new BadRequestException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}