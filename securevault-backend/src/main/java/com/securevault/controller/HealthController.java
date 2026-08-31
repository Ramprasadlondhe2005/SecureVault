package com.securevault.controller;

import com.securevault.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public ResponseEntity<?> root() {
        return ResponseEntity.ok(new ApiResponse(true, "SecureVault API Backend is running online!"));
    }

    @GetMapping("/api/health")
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(new ApiResponse(true, "SecureVault API Backend is healthy!"));
    }
}
