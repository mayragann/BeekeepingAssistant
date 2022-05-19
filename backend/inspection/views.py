from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Inspection
from .serializers import InspectionSerializer
from .models import Hive

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def inspection_details(request, pk):
    hive = get_object_or_404(Hive, pk=pk)
    if request.method == "GET":
        inspection = Inspection.objects.filter(hive_id = hive.id)
        serializer = InspectionSerializer(inspection, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
      
    