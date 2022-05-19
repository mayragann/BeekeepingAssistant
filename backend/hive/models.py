from django.db import models
from authentication.models import User

# Create your models here.
class Hive(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hive_number = models.IntegerField()
    inspection_date = models.DateField()