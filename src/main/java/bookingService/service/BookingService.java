package bookingService.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bookingService.entity.Booking;
import bookingService.repository.Repo;

@Service
public class BookingService {
	
	@Autowired
	private final Repo repo;
	
	public BookingService (Repo repo) {
		this.repo = repo;
	}
	
	public List<Booking> getAllBookings() {
		return repo.findAll();
	}
	
	public Optional<Booking> getBookingById(Long id) {
		return repo.findById(id);
	}
	
	public Booking createBooking(Booking booking) {
		return repo.save(booking);
	}
	
	public Booking updateBooking(Long id, Booking updatedBooking) {
		Optional<Booking> existingBooking = repo.findById(id);
		if(existingBooking.isPresent()) {
            Booking savedBooking = existingBooking.get();
            savedBooking.setName(updatedBooking.getName());
            savedBooking.setEmail(updatedBooking.getEmail());
            savedBooking.setStartDate(updatedBooking.getStartDate());
            savedBooking.setEndDate(updatedBooking.getEndDate());
            savedBooking.setStartTime(updatedBooking.getStartTime());
            savedBooking.setEndTime(updatedBooking.getEndTime());
            savedBooking.setPhoneNumber(updatedBooking.getPhoneNumber());
            return repo.save(savedBooking);
		} else {
			return null;
		}
	}
	
	public boolean deleteBooking(Long id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	
}
