package bookingService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import bookingService.entity.Booking;

public interface Repo extends JpaRepository<Booking, Long>{
	
	
}
