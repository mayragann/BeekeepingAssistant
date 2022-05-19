from django.urls import path
from inspection import views

urlpatterns = [
    # path('', views.update_inspection),
     path('<int:pk>', views.inspection_details),
]
