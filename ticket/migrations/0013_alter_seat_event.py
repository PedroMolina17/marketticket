# Generated by Django 5.0.2 on 2024-02-13 09:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0012_alter_seat_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seat',
            name='event',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='seats', to='ticket.event'),
        ),
    ]
