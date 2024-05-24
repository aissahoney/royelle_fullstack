from django_seed import Seed
from .models import *


def run():
    seeder = Seed.seeder()

    facilities_data = [
    {
        "name": "Gym",
        "icon":"",
        "type": "fitness",
        "image": "image/facilities-1.png",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
        "name": "Swimming Pool",
        "icon":"",
        "type": "fitness",
        "image": "image/facilities-thumb-2.jpg",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
        "name": "Restaurant",
        "icon":"",
        "type": "foods",
        "image": "image/home/facilities-thumb-3.jpg",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
        "name": "Training Grounds",
        "icon":"",
        "type": "experience",
        "image": "image/home/facilities-thumb-4.jpg",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
        "name": "Golf",
        "icon":"",
        "type": "fitness",
        "image": "image/home/facilities-1.png",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
        "name": "Cars",
        "icon":"",
        "type": "rental",
        "image": "image/home/facilities-1.png",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
        "name": "Gym",
        "icon":"",
        "type": "fitness",
        "image": "image/home/facilities-1.png",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
   
] 
    for data in facilities_data :
        seeder.add_entity(Facilities,1,data)
    seeder.execute()
    print("data Amenities upload")  
