from django.shortcuts import render
from django.http import JsonResponse
from django.contrib import messages
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

def index_room(request):
    rooms= RoomSerializer(Room.objects.all(), many=True)
    amenities= AmenitiesSerializer(Amenities.objects.all(), many=True)
    return JsonResponse({'rooms':rooms.data, 'amenities':amenities.data})


@api_view(['POST'])
def create_room(request):
    if request.method == 'POST':
        rooms = RoomSerializer(data=request.data)
        if rooms.is_valid():
            rooms.save()
            return Response({'success': 'Car created successfully'})
        return Response(rooms.errors)
    

def show_room(request, id):
    rooms = RoomSerializer(Room.objects.get(id=id))
    return JsonResponse({'rooms': rooms.data})

@api_view(['DELETE'])
def delete_room(request, id):
    room = Room.objects.get(id=id)
    room.delete()
    return Response({'success': 'bien supprimé'})

@api_view(['PUT'])
def update_room(request, id):
    room = Room.objects.get(id=id)
    rooms = RoomSerializer(room, data=request.data)
    if rooms.is_valid():
        rooms.save()
        return Response({'success': 'bien mis à jour'})
    return Response({'error': 'il y a une erreur'})