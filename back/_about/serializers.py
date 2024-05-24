from rest_framework import serializers
from .models import *


class ResortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resort
        fields = '__all__'


class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'