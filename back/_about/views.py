from django.shortcuts import render
from django.http import JsonResponse
from django.contrib import messages
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

def index_about(request):
    resort= ResortSerializer(Resort.objects.all(), many=True)
    manager= ManagerSerializer(Manager.objects.all(), many=True)
    team= TeamSerializer(Team.objects.all(), many=True)
    return JsonResponse({'resort':resort.data,'manager':manager.data, 'team':team.data})


# view resort
# -----------
@api_view(['PUT'])
def update_resort(request, id):
    solo = Resort.objects.get(id=id)
    resort = ResortSerializer(solo, data=request.data)
    if resort.is_valid():
        resort.save()
        return Response({'success': 'bien mis à jour'})
    return Response({'error': 'il y a une erreur'}) 

def show_resort(request, id):
    resort = ResortSerializer(Resort.objects.get(id=id))
    return JsonResponse({'resort': resort.data})



# view manager
# ------------
@api_view(['PUT'])
def update_manager(request, id):
    solo_manager= Manager.objects.get(id=id)
    manager = ManagerSerializer(solo_manager, data=request.data)
    if manager.is_valid():
        manager.save()
        return Response({'success': 'bien mis à jour'})
    return Response({'error': 'il y a une erreur'})

def show_manager(request, id):
    manager = ManagerSerializer(Manager.objects.get(id=id))
    return JsonResponse({'manager': manager.data})




# team
# -----
@api_view(['PUT'])
def update_team(request, id):
    solo_team= Team.objects.get(id=id)
    team = TeamSerializer(solo_team, data=request.data)
    if team.is_valid():
        team.save()
        return Response({'success': 'bien mis à jour'})
    return Response({'error': 'il y a une erreur'})   

def show_team(request, id):
    team = TeamSerializer(Team.objects.get(id=id))
    return JsonResponse({'team': team.data})

# @api_view(['DELETE'])
# def delete_manager(request, id):
#     manager = Manager.objects.get(id=id)
#     manager.delete()
#     return Response({'success': 'bien supprimé'})

