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
	void getAllBookings() {
		Booking booking1 = new Booking("John Doe", "john.doe@example.com", 
		LocalDate.of(2022, 10, 1), 
		LocalDate.of(2022, 10, 5),
        LocalTime.of(10, 0),
        LocalTime.of(15, 30),
        "123-456-7890");		
		
		Booking booking2 = new Booking();
		List<Booking> bookings = Arrays.asList(booking1, booking2);
		
		when(repo.findAll()).thenReturn(bookings);
		
		List<Booking> result = bookingService.getAllBookings();
		
        assertEquals(2, result.size());
        assertEquals(booking1, result.get(0));
        assertEquals(booking2, result.get(1));
	}
}

