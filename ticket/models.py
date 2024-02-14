from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField()
    duration_minutes = models.IntegerField()


class Screen(models.Model):
    name = models.CharField(max_length=50)


class Schedule(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE)
    start_time = models.DateTimeField()


class Reservation(models.Model):
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    seat_number = models.CharField(max_length=10)
    reservation_time = models.DateTimeField()


class Seat(models.Model):
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=10)
    is_available = models.BooleanField(default=True)
