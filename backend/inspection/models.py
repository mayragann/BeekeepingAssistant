from django.db import models
from hive.models import Hive
from authentication.models import User

# Create your models here.

class Inspection(models.Model):
     hive = models.ForeignKey(Hive, on_delete=models.CASCADE)
     user = models.ForeignKey(User,on_delete=models.CASCADE)
     eggs = models.IntegerField()
     larvae = models.IntegerField()
     sealed_brood = models.IntegerField()
     covered_bees = models.IntegerField()
     nectar_honey = models.IntegerField()
     pollen = models.IntegerField()
     pest_spotted = models.CharField(max_length=200)
     pest_action = models.CharField(max_length=200)
     notes_concerns = models.CharField(max_length=300)