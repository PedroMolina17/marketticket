# Generated by Django 5.0.2 on 2024-02-19 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0002_genre_movie_image_movie_price_movie_genre_review_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='image_portada',
            field=models.ImageField(default='default_image', upload_to='movie_images/'),
        ),
    ]
