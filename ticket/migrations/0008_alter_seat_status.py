# Generated by Django 5.0.2 on 2024-02-11 03:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0007_alter_event_event_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seat',
            name='status',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='ticket.status'),
        ),
    ]
