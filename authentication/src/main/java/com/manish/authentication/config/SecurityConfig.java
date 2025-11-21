package com.manish.authentication.config;

import com.manish.authentication.security.CustomUserDetailsService;
import com.manish.authentication.security.RestAuthenticationEntryPoint;
import com.manish.authentication.security.TokenAuthenticationFilter;
import com.manish.authentication.security.oauth2.CustomOAuth2UserService;
import com.manish.authentication.security.oauth2.HttpCookieOAuth2AuthorizationRequestRepository;
import com.manish.authentication.security.oauth2.OAuth2AuthenticationFailureHandler;
import com.manish.authentication.security.oauth2.OAuth2AuthenticationSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
        @Autowired
        private CustomUserDetailsService customUserDetailsService;
        @Autowired
        private CustomOAuth2UserService customOAuth2UserService;
        @Autowired
        private OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
        @Autowired
        private OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;
        @Autowired
        private HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository;

        @Bean
        public TokenAuthenticationFilter tokenAuthenticationFilter() {
                return new TokenAuthenticationFilter();
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Bean
        public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
                        throws Exception {
                return authenticationConfiguration.getAuthenticationManager();
        }

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                http
                                .cors(cors -> {
                                }) // Uses WebMvcConfig
                                .csrf(csrf -> csrf.disable())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .formLogin(form -> form.disable())
                                .httpBasic(basic -> basic.disable())
                                .exceptionHandling(
                                                ex -> ex.authenticationEntryPoint(new RestAuthenticationEntryPoint()))
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers("/", "/error", "/favicon.ico", "/**/*.png",
                                                                "/**/*.gif", "/**/*.svg", "/**/*.jpg", "/**/*.html",
                                                                "/**/*.css", "/**/*.js")
                                                .permitAll()
                                                .requestMatchers("/auth/**", "/oauth2/**").permitAll()
                                                .anyRequest().authenticated())
                                .oauth2Login(oauth2 -> oauth2
                                                .authorizationEndpoint(authorization -> authorization
                                                                .baseUri("/oauth2/authorize")
                                                                .authorizationRequestRepository(
                                                                                cookieAuthorizationRequestRepository))
                                                .redirectionEndpoint(redirection -> redirection
                                                                .baseUri("/oauth2/callback/*"))
                                                .userInfoEndpoint(userInfo -> userInfo
                                                                .userService(customOAuth2UserService))
                                                .successHandler(oAuth2AuthenticationSuccessHandler)
                                                .failureHandler(oAuth2AuthenticationFailureHandler));

                http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
                return http.build();
        }
}
