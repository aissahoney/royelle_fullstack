from django_seed import Seed
from .models import *


def run():
    seeder = Seed.seeder()
    hero_data = [
    {
      "image": "image/home/hero-bg.jpg", 
      "city": "CALIFORNIA",
      "rating": 5,
    },
    {
      "image": "image/home/hero-bg2.jpg", 
      "city": "KASHMIR",
      "rating": 5,
    },
    {
      "image": "image/home/hero-bg.jpg", 
      "city": "COLOSSEUM",
      "rating": 5,
    },
    {
      "image": "image/home/hero-bg2.jpg", 
      "city": "SRILANKA",
      "rating": 5,
    },

  ]
    for data in hero_data :
        seeder.add_entity(Hero,1,data)
    seeder.execute()
    print("data Hero upload")

