from django.urls import path
from .views import *


urlpatterns = [

    path('hero/', index_hero),
    path('createhero/', create_hero),
    path('updatehero/<int:id>/', update_hero),
    path('deletehero/<int:id>/', delete_hero),
    path('showhero/<int:id>/', show_hero),
]


