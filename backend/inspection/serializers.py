from rest_framework import serializers
from .models import Inspection


class InspectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Inspection
        fields = ['id', 'eggs', 'larvae', 'sealed_brood', 'covered_bees', 'nectar_honey', 'pollen', 'pest_spotted', 'pest_action', 'notes_concerns','user_id','hive','hive_id']
        depth = 1

    hive_id = serializers.IntegerField(write_only=True)