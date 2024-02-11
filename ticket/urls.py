from django.urls import path, include
from rest_framework import routers
from .views import EventView, SeatView
router = routers.DefaultRouter()
router.register(r'event', EventView, 'event')
router.register(r'seat', SeatView, 'seat')
urlpatterns = [
    path("api/v1/", include(router.urls))

]
