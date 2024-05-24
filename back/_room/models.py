from django.db import models

# Create your models here.
class Amenities(models.Model):
    name=models.CharField(max_length=50, default='Basic Amenities')
    person_min=models.IntegerField()
    person_max=models.IntegerField()
    wifi=models.CharField(max_length=50)
    swimming=models.BooleanField(default=False)
    meal=models.CharField(max_length=50)
    size=models.IntegerField()
    gym=models.BooleanField(default=False)


class Room (models.Model):
    name=models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    size = models.IntegerField()
    bed = models.IntegerField()
    price = models.DecimalField(max_digits=5,decimal_places=2)
    rating = models.IntegerField()
    image = models.ImageField(upload_to='image', default='image/room-1.png')
    checkIn=models.DateField()
    checkOut=models.DateField()
    adult=models.IntegerField()
    children=models.IntegerField()
    promo = models.IntegerField()
    description = models.TextField()
    amenities = models.ForeignKey(Amenities, on_delete=models.SET_NULL,null=True, blank=True)

