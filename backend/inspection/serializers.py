from rest_framework import serializers
from .models import Inspection

class InspectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inspection
        fields = ['id', 'hive_id', 'eggs', 'larvae', 'sealed_brood', 'covered_bees', 'nectar_honey', 'nectar_honey', 'pollen', 'pest_action', 'notes_concerns']
        depth = 1