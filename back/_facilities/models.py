from django.db import models


# Create your models here.

class Facilities(models.Model):
    name= models.CharField(max_length=50)
    image =models.ImageField(upload_to="image", default='image/hero-bg.jpg')
    icon= models.CharField(max_length=100)
    type=models.CharField(max_length=50)
    description= models.TextField()
    rules= models.TextField()
    