package ControllerTest;

import com.fasterxml.jackson.databind.ObjectMapper;

import bookingService.entity.Booking;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.time.LocalDate;
import java.time.LocalTime;

@WebMvcTest
public class ControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	public void testCreateBooking() throws Exception {
        Booking newBooking = new Booking("John Doe", "john.doe@example.com", 
                LocalDate.of(2022, 10, 1), 
                LocalDate.of(2022, 10, 5),
                LocalTime.of(10, 0),
                LocalTime.of(15, 30),
                "123-456-7890");
        
        String jsonRequestBody = objectMapper.writeValueAsString(newBooking);
        
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders
                .post("/bookings")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonRequestBody))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andReturn();
        
        String responseContent = result.getResponse().getContentAsString();
        Booking createdBooking = objectMapper.readValue(responseContent, Booking.class);

        assertEquals(newBooking.getName(), createdBooking.getName());
        assertEquals(newBooking.getEmail(), createdBooking.getEmail());
	}
	
}
