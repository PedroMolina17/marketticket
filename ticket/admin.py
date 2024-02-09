from django.contrib import admin
from .models import Event, Customer, Seat, Ticket, EntryHistory, GroupSeat, Status
# Register your models here.
admin.site.register(Event)
admin.site.register(Customer)
admin.site.register(Seat)
admin.site.register(Ticket)
admin.site.register(EntryHistory)
admin.site.register(GroupSeat)
admin.site.register(Status)
