from django.shortcuts import render
from django.http import JsonResponse
from django.contrib import messages
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

def index_hero(request):
    heros= HeroSerializer(Hero.objects.all(), many=True)
    return JsonResponse({'heros':heros.data})


@api_view(['POST'])
def create_hero(request):
    if request.method == 'POST':
        hero = HeroSerializer(data=request.data)
        if hero.is_valid():
            hero.save()
            return Response({'success': 'Car created successfully'})
        return Response(hero.errors)
    

def show_hero(request, id):
    hero = HeroSerializer(Hero.objects.get(id=id))
    return JsonResponse({'hero': hero.data})

@api_view(['DELETE'])
def delete_hero(request, id):
    hero = Hero.objects.get(id=id)
    hero.delete()
    return Response({'success': 'bien supprimé'})

@api_view(['PUT'])
def update_hero(request, id):
    hero = Hero.objects.get(id=id)
    heros = HeroSerializer(hero, data=request.data)
    if heros.is_valid():
        heros.save()
        return Response({'success': 'bien mis à jour'})
    return Response({'error': 'il y a une erreur'})