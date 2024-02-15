from django.contrib import admin
from .models import Seat, Movie, Reservation, Schedule, Screen, Genre, Review, UserProfile
# Register your models here.

admin.site.register(Seat)
admin.site.register(Movie)
admin.site.register(Reservation)
admin.site.register(Schedule)
admin.site.register(Screen)
admin.site.register(Genre)
admin.site.register(Review)
admin.site.register(UserProfile)
