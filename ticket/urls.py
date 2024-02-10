from django.urls import path, include
from rest_framework import routers
from .views import EventView
router = routers.DefaultRouter()
router.register(r'event', EventView, 'event')
urlpatterns = [
    path("api/v1/", include(router.urls))

]
