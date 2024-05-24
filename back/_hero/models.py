from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


# Create your models here.
class Hero(models.Model):
    image =models.ImageField(upload_to="image", default='image/hero-bg.jpg')
    city=models.CharField(max_length=50)
    rating = models.IntegerField(
        default=3,
        blank=True,
        null=True,
        help_text="Enter a rating from 1 to 5.",
        validators=[MinValueValidator(1), MaxValueValidator(5)])
