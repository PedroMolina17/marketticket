from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField()
    duration_minutes = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    image = models.ImageField(
        upload_to='movie_images/', default='default_image.jpg')
    image_portada = models.ImageField(
        upload_to='movie_images/', default='default_image')
    genre = models.ForeignKey(
        Genre, on_delete=models.CASCADE, default='')

    def __str__(self):
        return self.title


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(
        upload_to='profile_images/', blank=True, null=True)

    def __str__(self):
        return self.user.username


class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    title = models.TextField(default='Default Title')
    comment = models.TextField()
    comment_time = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.movie.title} - {self.user.username}"


class Screen(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Schedule(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE)
    start_time = models.DateTimeField()

    def __str__(self):
        return self.sceen + self.movie


class Reservation(models.Model):
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    seat_number = models.CharField(max_length=10)
    reservation_time = models.DateTimeField()

    def __str__(self):
        return self.seat_number


class Seat(models.Model):
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=10)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.seat_number
