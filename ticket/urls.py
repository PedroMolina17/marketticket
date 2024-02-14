from django.urls import path, include
from rest_framework import routers
from .views import SeatView

router = routers.DefaultRouter()
router.register(r'seat', SeatView, 'seat')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    # path('buy_seat/<int:seat_id>/', buy_seat, name='buy_seat'),

]
