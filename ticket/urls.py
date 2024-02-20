from django.urls import path, include
from rest_framework import routers
from .views import MovieView, ReviewView, UserView, UserProfileView

router = routers.DefaultRouter()
router.register(r'movie', MovieView, 'movie')
router.register(r'review', ReviewView, 'review')
router.register(r'user', UserView, 'user')
router.register(r'userprofile', UserProfileView, 'profile')


urlpatterns = [
    path("api/v1/", include(router.urls)),
    # path('buy_seat/<int:seat_id>/', buy_seat, name='buy_seat'),

]
