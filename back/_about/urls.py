from django.urls import path
from .views import *


urlpatterns = [
    path('about/', index_about),
    path('updateResort/<int:id>/', update_resort),
    path('showResort/<int:id>/', show_resort),

    path('updateManager/<int:id>/', update_manager),
    path('showManager/<int:id>/', show_manager),

    path('updateTeam/<int:id>/', update_team),
    path('showTeam/<int:id>/', show_team),
    
]