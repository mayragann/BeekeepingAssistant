from rest_framework import serializers
from .models import Hive

class HiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hive
        fields = ['id', 'hive_number', 'inspection_date', 'user_id']
        depth = 1