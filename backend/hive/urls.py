from django.urls import path
from hive import views

urlpatterns = [
     path('', views.user_hive),
     path('update/<int:pk>', views.update_user_hive),
]
