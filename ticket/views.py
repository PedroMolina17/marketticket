from rest_framework import viewsets
from .serializer import MovieSerializer, SeatSerializer
from .models import Movie, Seat
# Create your views here.
from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from .models import Seat, Movie
import json


class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class SeatView(viewsets.ModelViewSet):
    serializer_class = SeatSerializer
    queryset = Seat.objects.all()
