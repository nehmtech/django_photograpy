from django.urls import path
from .views import home, gallary, success, quote, about, live

urlpatterns = [
    path('', home, name="home"),
    path('gallary/', gallary, name="gallary"),
    path('success/', success, name='success'),
    path('quote/', quote, name='quote'),
    path('about/', about, name='about'),
    path('live/', live, name='live'),
]
