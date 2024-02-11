from rest_framework import viewsets
from .serializer import EventSerializer, SeatSerializer
from .models import Event, Seat
# Create your views here.


class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()


class SeatView(viewsets.ModelViewSet):
    serializer_class = SeatSerializer
    queryset = Seat.objects.all()
