package bookingService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import bookingService.entity.Booking;
import bookingService.repository.Repo;
import bookingService.service.BookingService;

@ExtendWith(MockitoExtension.class)
public class BookingServiceTest {

    @Mock
    private Repo repo;

    @InjectMocks
    private BookingService bookingService;

    @Test
    public void testGetAllBookings() {
        // Mock data
        List<Booking> mockBookings = new ArrayList<>();
        when(repo.findAll()).thenReturn(mockBookings);

        // Test
        List<Booking> result = bookingService.getAllBookings();

        // Verify
        assertEquals(mockBookings, result);
        verify(repo, times(1)).findAll();
    }

    @Test
    public void testGetBookingById() {
        // Mock data
        Long bookingId = 1L;
        Booking mockBooking = new Booking(/* provide necessary details */);
        when(repo.findById(bookingId)).thenReturn(Optional.of(mockBooking));

        // Test
        Optional<Booking> result = bookingService.getBookingById(bookingId);

        // Verify
        assertTrue(result.isPresent());
        assertEquals(mockBooking, result.get());
        verify(repo, times(1)).findById(bookingId);
    }

    @Test
    public void testCreateBooking() {
        // Mock data
        Booking mockBooking = new Booking(/* provide necessary details */);
        when(repo.save(any())).thenReturn(mockBooking);

        // Test
        Booking result = bookingService.createBooking(mockBooking);

        // Verify
        assertEquals(mockBooking, result);
        verify(repo, times(1)).save(mockBooking);
    }

    @Test
    public void testUpdateBooking() {
        // Mock data
        Long bookingId = 1L;
        Booking existingBooking = new Booking(/* provide necessary details */);
        Booking updatedBooking = new Booking(/* provide necessary details */);

        when(repo.findById(bookingId)).thenReturn(Optional.of(existingBooking));
        when(repo.save(any())).thenReturn(updatedBooking);

        // Test
        Booking result = bookingService.updateBooking(bookingId, updatedBooking);

        // Verify
        assertEquals(updatedBooking, result);
        verify(repo, times(1)).findById(bookingId);
        verify(repo, times(1)).save(existingBooking);
    }

    @Test
    public void testDeleteBooking() {
        // Mock data
        Long bookingId = 1L;

        when(repo.existsById(bookingId)).thenReturn(true);

        // Test
        boolean result = bookingService.deleteBooking(bookingId);

        // Verify
        assertTrue(result);
        verify(repo, times(1)).existsById(bookingId);
        verify(repo, times(1)).deleteById(bookingId);
    }

    @Test
    public void testDeleteBookingNotFound() {
        // Mock data
        Long bookingId = 1L;

        when(repo.existsById(bookingId)).thenReturn(false);

        // Test
        boolean result = bookingService.deleteBooking(bookingId);

        // Verify
        assertFalse(result);
        verify(repo, times(1)).existsById(bookingId);
        verify(repo, never()).deleteById(bookingId);
    }
}

