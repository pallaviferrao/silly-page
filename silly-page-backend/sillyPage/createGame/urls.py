import imp
from django.urls import path
from createGame import views

urlpatterns = [ 
    path("", views.createGame, name="createGame")
]