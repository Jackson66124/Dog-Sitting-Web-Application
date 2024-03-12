package bookingService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import bookingService.entity.Booking;
import bookingService.repository.Repo;
import bookingService.service.BookingService;

@SpringBootTest
public class BookingServiceTest {
	
	@Mock
	private Repo repo;
	
	@InjectMocks
	private BookingService bookingService;
	
	@Test
	public void testGetAllBookings() {
		Booking booking1 = new Booking("John Doe", "john.doe@example.com", 
		LocalDate.of(2022, 10, 1), 
		LocalDate.of(2022, 10, 5),
        LocalTime.of(10, 0),
        LocalTime.of(15, 0),
        "123-456-7890");		
		
		Booking booking2 = new Booking("James Frank", "James.Frank@example.com", 
		LocalDate.of(2022, 10, 4), 
		LocalDate.of(2022, 10, 8),
		LocalTime.of(12, 0),
		LocalTime.of(15, 0),
		"123-456-7890");
		
		repo.save(booking1);
		repo.save(booking2);

		List<Booking> result = bookingService.getAllBookings();
		
        assertEquals(2, result.size());
        assertEquals(booking1, result.get(0));
        assertEquals(booking2, result.get(1));
	}
	
	@Test
	public void testDeleteBooking() {
		Booking booking2 = new Booking("John Doe", "john.doe@example.com", 
		LocalDate.of(2022, 10, 1), 
		LocalDate.of(2022, 10, 5),
        LocalTime.of(10, 0),
        LocalTime.of(15, 30),
        "123-456-7890");
		booking2.setId(1L);
		
		repo.save(booking2);
		
		long bookingId = 1L;
		
		when(repo.existsById(bookingId)).thenReturn(true);
		
		boolean result = bookingService.deleteBooking(bookingId);
		assertTrue(result, "Booking Should be deleted");
		verify(repo, times(1)).deleteById(bookingId);
	}
}

