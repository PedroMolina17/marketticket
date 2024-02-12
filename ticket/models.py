from django.db import models

# Create your models here.


class Event(models.Model):
    event_name = models.CharField(max_length=255)
    event_date = models.DateTimeField()
    event_image = models.ImageField(
        upload_to='event_images/', null=True, default='default.jpg')

    def __str__(self):
        return self.event_name


class Customer(models.Model):
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    dni = models.CharField(max_length=8)

    def __str__(self):
        return self.name


class GroupSeat(models.Model):
    description = models.CharField(max_length=255)
    price = models.IntegerField()

    def __str__(self):
        return self.description


class Status(models.Model):
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.description


class Seat(models.Model):
    row = models.CharField(max_length=255)
    number = models.IntegerField()
    status = models.ForeignKey(
        Status, on_delete=models.CASCADE, default=2)
    price = models.FloatField()
    group_seat = models.ForeignKey(
        GroupSeat, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.row) + str(self.number)


class Ticket(models.Model):
    ticket_id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    id_seat = models.ForeignKey(Seat, on_delete=models.CASCADE)
    ticket_code = models.CharField(max_length=255, unique=True)
    purchase_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255)
    price = models.FloatField()

    def __str__(self):
        return str(self.ticket_id) + str(self.event)


class EntryHistory(models.Model):
    history_id = models.AutoField(primary_key=True)
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    entry_time = models.DateTimeField(auto_now_add=True)
    entry_gate = models.CharField(max_length=255)

    def __str__(self):
        return self.ticket
