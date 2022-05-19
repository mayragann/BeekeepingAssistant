from django.urls import path
from inspection import views

urlpatterns = [
    # path('', views.create_inspection),
     path('<int:pk>', views.inspection_details),
]
