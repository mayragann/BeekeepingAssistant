from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Inspection
from .serializers import InspectionSerializer
from hive.models import Hive


@api_view(['GET', 'POST','PUT'])
@permission_classes([IsAuthenticated])
def inspection_details(request, pk):
    hive = get_object_or_404(Hive, pk=pk)
    inspection = Inspection.objects.filter(hive_id = hive.id, user=request.user)
    if request.method == "GET":
        serializer = InspectionSerializer(inspection, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    elif request.method == 'POST':
        serializer = InspectionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data,status.HTTP_200_OK)
    
    
    elif request.method == 'PUT':
        serializer = InspectionSerializer(hive, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(hive_id=request.hive.id)
            return Response(serializer.data, status=status.HTTP_200_OK)

# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def update_inspection(request):
#     hive = get_object_or_404(Hive)
#     if request.method == 'PUT':
#         serializer = InspectionSerializer(hive, data=request.data, many=True)
#         serializer.is_valid(raise_exception=True)
#         serializer.save(user=request.user)
#         return Response(serializer.data, status=status.HTTP_200_OK)