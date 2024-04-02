package dailyPlanner.prod.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dailyPlanner.prod.Entity.User;
import dailyPlanner.prod.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user)
    {
        return userRepository.save(user);
    }

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public User getUserByID(Long id)
    {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(Long id, User user)
    {
        user.setId(id);
        return userRepository.save(user);
    }

    public void deleteUser(Long id)
    {
        userRepository.deleteById(id);
    }
}
