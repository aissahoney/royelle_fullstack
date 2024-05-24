from django.db import models


# Create your models here.

class Resort(models.Model):
    title=models.CharField(max_length=100)
    subtitle=models.CharField(max_length=100)
    content_1= models.TextField()
    content_2= models.TextField()
    street= models.CharField(max_length=100)
    county= models.CharField(max_length=100)
    image =models.ImageField(upload_to="image/home", default='image/hero-bg.jpg')


class Manager(models.Model):
    title=models.CharField(max_length=100)
    quotes=models.CharField(max_length=250)
    image =models.ImageField(upload_to="image/inner", default='image/hero-bg.jpg')
    description= models.TextField()
    manager_img=models.ImageField(upload_to="image/inner", default='image/hero-bg.jpg')
    manager_name=models.CharField(max_length=100)
    video=models.URLField()


class Team(models.Model):
    name=models.CharField(max_length=100)
    role=models.CharField(max_length=100)
    team_image =models.ImageField(upload_to="image/inner", null=True)
    email= models.EmailField()







