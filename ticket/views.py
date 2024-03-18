from rest_framework import viewsets
from .serializer import MovieSerializer, SeatSerializer, ReviewSerializer, UserSerializer, UserProfileSerializer
# Create your views here.
from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from .models import Seat, Movie, Review, User, UserProfile
import json


class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class SeatView(viewsets.ModelViewSet):
    serializer_class = SeatSerializer
    queryset = Seat.objects.all()


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserProfileView(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def get_queryset(self):
        movie_id = self.request.query_params.get('movie', None)
        if movie_id is not None:
            return Review.objects.filter(movie=movie_id)
        else:
            return Review.objects.all()
