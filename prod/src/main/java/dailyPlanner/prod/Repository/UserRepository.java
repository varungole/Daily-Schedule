package dailyPlanner.prod.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dailyPlanner.prod.Entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
