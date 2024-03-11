package bookingService.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DogBookings")
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    
    @Id
    @Column(name = "ID")
    @GeneratedValue
    private Long id;
    
    @Column(nullable = false, name = "Name")
    private String name;
    
    @Column(nullable = false, name = "Email")
    private String email;
    
    @Column(nullable = false, name = "StartDate")
    private LocalDate startDate;
    
    @Column(nullable = false, name = "EndDate")
    private LocalDate endDate;
    
    @Column(nullable = false, name = "StartTime")
    private LocalTime startTime;
    
    @Column(nullable = false, name = "EndTime")
    private LocalTime endTime;
    
    @Column(nullable = false, name = "PhoneNumber")
    private String phoneNumber;

    // Getter and setter methods...

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate (java.time.LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(java.time.LocalDate endDate) {
        this.endDate = endDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
