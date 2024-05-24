from django.shortcuts import render
from django.http import JsonResponse
from django.contrib import messages
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
# from authentification.serializers import UserSerializer
# from authentification.models import User

# Create your views here.

# all
def index_article(request):
    articles = ArticleSerializer(Article.objects.all(),many=True)
    category = CategorySerializer(Category.objects.all(),many=True)
    tag = TagSerializer(Tag.objects.all(),many=True)
    # users = UserSerializer(User.objects.all(), many=True)
    return JsonResponse({'articles': articles.data, 'category':category.data, 'tag':tag.data})


# article
@api_view(['POST'])
def create_article (request):
    if request.method == 'POST':
        articles = ArticleSerializer(data=request.data)
        if articles.is_valid():
            articles.save()
            return Response({'success': 'items created successfully'})
        return Response(articles.errors)

    
@api_view(['PUT'])
def update_article(request, id):
    article = Article.objects.get(id=id)
    articles = ArticleSerializer(article, data=request.data)
    if articles.is_valid():
        articles.save()
        return Response({'success': 'Article mis à jour'})
    else:
        return Response({'error': 'Article non mis à jour'})
    
@api_view(['DELETE'])
def delete_article(request, id):
    article = Article.objects.get(id=id)
    article.delete()
    return Response({'success': 'Article supprimé'})

def show_article(request, id):
    article = ArticleSerializer(Article.objects.get(id=id))
    return  JsonResponse({'article': article.data})




# Tag

@api_view(['POST'])
def create_tag (request):
    if request.method == 'POST':
        tag = TagSerializer(data=request.data)
        if tag.is_valid():
            tag.save()
            return Response({'success': 'items created successfully'})
        return Response(tag.errors)

    
@api_view(['PUT'])
def update_tag(request, id):
    tag = Tag.objects.get(id=id)
    tags = TagSerializer(tag, data=request.data)
    if tags.is_valid():
        tags.save()
        return Response({'success': 'tag mis à jour'})
    else:
        return Response({'error': 'tag non mis à jour'})
    
@api_view(['DELETE'])
def delete_tag(request, id):
    tag = Tag.objects.get(id=id)
    tag.delete()
    return Response({'success': 'tag supprimé'})

def show_tag(request, id):
    tag= TagSerializer(Article.objects.get(id=id))
    return  JsonResponse({'tag': tag.data})



# Category
@api_view(['POST'])
def create_category (request):
    if request.method == 'POST':
        category = CategorySerializer(data=request.data)
        if category.is_valid():
            category.save()
            return Response({'success': 'items created successfully'})
        return Response(category.errors)
    
@api_view(['PUT'])
def update_category(request, id):
    cat = Category.objects.get(id=id)
    category = CategorySerializer(cat, data=request.data)
    if category.is_valid():
        category.save()
        return Response({'success': 'category mis à jour'})
    else:
        return Response({'error': 'category non mis à jour'})
    
@api_view(['DELETE'])
def delete_category(request, id):
    category = Category.objects.get(id=id)
    category.delete()
    return Response({'success': 'category supprimé'})

def show_category(request, id):
    category= CategorySerializer(Category.objects.get(id=id))
    return  JsonResponse({'category': category.data})