package com.securevault.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration cors = new CorsConfiguration();

        cors.setAllowCredentials(true);

        // Allow Localhost, Vercel, and Production Origins
        cors.setAllowedOriginPatterns(Arrays.asList(
                "http://localhost:*",
                "http://127.0.0.1:*",
                "https://*.vercel.app",
                "https://*"
        ));


        cors.setAllowedMethods(Arrays.asList(
                "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"
        ));
        cors.setAllowedHeaders(Arrays.asList("*"));
        cors.setExposedHeaders(Arrays.asList("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cors);

        return new CorsFilter(source);
    }
}
