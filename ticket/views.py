from rest_framework import viewsets
from .serializer import EventSerializer, SeatSerializer
from .models import Event, Seat
# Create your views here.
from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from .models import Seat, Ticket, Customer


def buy_seat(request, seat_id):
    seat = get_object_or_404(Seat, pk=seat_id)
    event = get_object_or_404(Event, pk=2)
    customer = get_object_or_404(Customer, pk=1)
    # Verificar si el asiento está ocupado
    if seat.status_id == 1:
        return JsonResponse({'error': 'El asiento ya está ocupado'}, status=400)

    # Crear un nuevo ticket para el cliente
    ticket = Ticket.objects.create(
        event=event,
        customer=customer,
        id_seat=seat,
        # Genera un código de ticket único como desees
        ticket_code=str(seat.id) + str(seat.id),
        status='Cancelado',  # O cualquier otro estado que desees
        price=seat.price
    )

    # Marcar el asiento como ocupado
    seat.status_id = 1  # Así asumo que 1 es el ID para el estado ocupado
    seat.save()

    return JsonResponse({'success': 'Compra exitosa', 'ticket_id': ticket.ticket_id})


class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()


class SeatView(viewsets.ModelViewSet):
    serializer_class = SeatSerializer
    queryset = Seat.objects.all()
