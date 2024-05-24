from django.db import models
from datetime import datetime

# Create your models here.
class Category (models.Model):
    name= models.CharField(max_length=50)
    def __str__(self):
        return self.name


class Tag (models.Model):
    name= models.CharField(max_length=20)
    def __str__(self):
        return self.name


class Article(models.Model):
    validated=models.BooleanField(default=False)
    title=models.CharField(max_length=100)
    date=models.DateField(default=datetime.now())
    content= models.TextField()
    image =models.ImageField(upload_to="image/home", default='image/home/blog-details-3.jpg')
    category= models.ForeignKey(Category, blank=True, null=True, on_delete=models.SET_NULL)
    tag= models.ManyToManyField(Tag)
    

class Comment(models.Model):
    name = models.CharField(max_length=80)
    email = models.EmailField()
    profile = models.ImageField(upload_to='image/', default='images/inner/blog-details-author-1.png')
    comment = models.TextField()
    dateTime = models.DateTimeField(default=datetime.now())
    article = models.ForeignKey(Article,  on_delete=models.SET_NULL, null=True, blank=True)