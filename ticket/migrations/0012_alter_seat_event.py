# Generated by Django 5.0.2 on 2024-02-13 09:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0011_alter_seat_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seat',
            name='event',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='seats', to='ticket.event'),
        ),
    ]