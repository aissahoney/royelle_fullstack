from django.urls import path
from .views import *


urlpatterns = [
    # article
    path('articles/' , index_article),
    path('createArticle/', create_article),
    path('updateArticle/<int:id>/', update_article),
    path('deleteArticle/<int:id>/', delete_article),
    path('showArticle/<int:id>/', show_article),

    # tag
    path('createTag/', create_tag),
    path('updateTag/<int:id>/', update_tag),
    path('deleteTag/<int:id>/', delete_tag),
    path('showTag/<int:id>/', show_tag),

    # category
    path('createCategory/', create_category),
    path('updateCategory/<int:id>/', update_category),
    path('deleteCategory/<int:id>/', delete_category),
    path('showCategory/<int:id>/', show_category),
    
]




