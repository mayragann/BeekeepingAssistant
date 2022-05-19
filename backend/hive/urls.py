from django.urls import path
from hive import views

urlpatterns = [
     path('', views.user_hive),
     # path('all/', views.get_all_hive),
]
