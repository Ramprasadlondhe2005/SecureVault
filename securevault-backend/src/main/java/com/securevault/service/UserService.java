package com.securevault.service;

import com.securevault.model.User;
import com.securevault.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // REGISTER
    public User register(String name, String email, String plainPassword) {
        User u = new User();

        u.setName(name);
        u.setEmail(email);
        u.setPasswordHash(BCrypt.hashpw(plainPassword, BCrypt.gensalt()));
        u.setRole("user");

        return repo.save(u);
    }

    public static class LoginResult {
        private final User user;
        private final boolean isDuress;

        public LoginResult(User user, boolean isDuress) {
            this.user = user;
            this.isDuress = isDuress;
        }

        public User getUser() { return user; }
        public boolean isDuress() { return isDuress; }
    }

    // LOGIN
    public Optional<User> login(String email, String password) {
        Optional<LoginResult> res = loginWithResult(email, password);
        return res.map(LoginResult::getUser);
    }

    public Optional<LoginResult> loginWithResult(String email, String password) {
        Optional<User> userOpt = repo.findByEmail(email);

        if (userOpt.isEmpty()) {
            return Optional.empty();
        }

        User user = userOpt.get();

        boolean normalMatches = BCrypt.checkpw(password, user.getPasswordHash());
        boolean duressMatches = user.getDuressPasswordHash() != null && BCrypt.checkpw(password, user.getDuressPasswordHash());

        if (!normalMatches && !duressMatches) {
            user.setFailedLoginAttempts(user.getFailedLoginAttempts() + 1);
            user.setLastFailedLoginAt(Instant.now());
            repo.save(user);
            return Optional.empty();
        }

        user.setFailedLoginAttempts(0);
        user.setLastFailedLoginAt(null);
        repo.save(user);

        return Optional.of(new LoginResult(user, duressMatches && !normalMatches));
    }

    // SET DURESS PASSWORD
    public void setDuressPassword(User user, String duressPassword) {
        user.setDuressPasswordHash(BCrypt.hashpw(duressPassword, BCrypt.gensalt()));
        repo.save(user);
    }

    // FIND USER BY EMAIL
    public Optional<User> findByEmail(String email) {
        return repo.findByEmail(email);
    }

    // ADMIN FEATURE
    public List<User> findAllUsers() {
        return repo.findAll();
    }

    // LOGOUT (JWT cannot be invalidated)
    public void logout(User user) {
        System.out.println("User logged out: " + user.getEmail());
    }

    public User save(User user) {
        return repo.save(user);
    }
}
