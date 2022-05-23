from django.urls import path
from inspection import views

urlpatterns = [
    path('add/', views.new_inspection_by_hive),
     path('<int:pk>/', views.inspection_details),
     path('all/<int:pk>/', views.get_inspection_by_hive)
]
