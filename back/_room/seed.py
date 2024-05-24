from django_seed import Seed
from .models import *
from datetime import date

def run():
    seeder = Seed.seeder()
    Amenities_data = [{
        "name": "Basic Amenities",
        "person_min": 1,
        "person_max": 1,
        "wifi": "Free",
        "swimming": False,
        "meal": "No meals included",
        "size": 200,
        "gym": False,
    },
    {
        "name": "Standard Amenities",
        "person_min": 2,
        "person_max": 3,
        "wifi": "Free",
        "swimming": True,
        "meal": "Breakfast included",
        "size": 300,
        "gym": False,
    },
    {
        "name": "Luxury Amenities",
        "person_min": 2,
        "person_max": 4,
        "wifi": "Free",
        "swimming": True,
        "meal": "All meals included",
        "size": 700,
        "gym": True,
    }
    ]

    for data in Amenities_data :
        seeder.add_entity(Amenities,1,data)
    seeder.execute()
    print("data Amenities upload")  


    room_data = [
    {
        "name": "Standard Room",
        "type": "Single",
        "size": 200,
        "bed": 1,
        "price": 250.00,
        "rating": 4,
        "image": "image/room-1.jpg",  
        "checkIn": date.today(),  
        "checkOut": date.today(),  
        "adult": 1,
        "children": 0,
        "promo": 0,
        "description": "This cozy room is perfect for solo travelers.",
        "amenities":Amenities.objects.get(id=1)
    },
    {
        "name": "Double Suite Rooms",
        "type": "Double",
        "size": 300,
        "bed": 2,
        "price": 350.00,
        "rating": 4,
        "image": "image/room-1.jpg",  
        "checkIn": date.today(),  
        "checkOut": date.today(),  
        "adult": 2,
        "children": 0,
        "promo": 0,
        "description": "This cozy room is perfect for solo travelers.",
        "amenities":Amenities.objects.get(id=1)
    },
    {
        "name": "Junior Suite Room",
        "type": "Double",
        "size": 300,
        "bed": 2,
        "price": 480.00,
        "rating": 5,
        "image": "image/room-1.jpg",  
        "checkIn": date.today(),  
        "checkOut": date.today(),  
        "adult": 2,
        "children": 1,
        "promo": 0,
        "description": "This spacious room is ideal for couples or families.",
        "amenities":Amenities.objects.get(id=2)
    },
    {
        "name": "Family Suite Room",
        "type": "Double",
        "size": 300,
        "bed": 3,
        "price": 480.00,
        "rating": 5,
        "image": "image/room-1.jpg",  
        "checkIn": date.today(),  
        "checkOut": date.today(),  
        "adult": 2,
        "children": 1,
        "promo": 0,
        "description": "This spacious room is ideal for couples or families.",
        "amenities":Amenities.objects.get(id=2)
    },
    {
        "name": "Suprior Bed Rooms",
        "type": "Double",
        "size": 300,
        "bed": 2,
        "price": 400.00,
        "rating": 4,
        "image": "image/room-1.jpg", 
        "checkIn": date.today(),  
        "checkOut": date.today(),  
        "adult": 2,
        "children": 0,
        # "rooms_qt": 1,
        "promo": 0,
        "description": "This cozy room is perfect for solo travelers.",
        "amenities":Amenities.objects.get(id=3)
    },
    {
        "name": "Deluxe Room",
        "type": "Double",
        "size": 300,
        "bed": 3,
        "price": 480.00,
        "rating": 5,
        "image": "image/room-1.jpg",  
        "checkIn": date.today(),  
        "checkOut": date.today(), 
        "adult": 2,
        "children": 1,
        "promo": 0,
        "description": "This spacious room is ideal for couples or families.",
        "amenities":Amenities.objects.get(id=3)
    },

    {
        "name": "Delux Family Rooms",
        "type": "Double",
        "size": 700,
        "bed": 4,
        "price": 600.00,
        "rating": 5,
        "image": "image/room-1.jpg", 
        "checkIn": date.today(),  
        "checkOut": date.today(),  
        "adult": 2,
        "children": 2,
        "promo": 0,
        "description": "This spacious room is ideal for couples or families.",
        "amenities":Amenities.objects.get(id=3)
    }
] 

    for data in room_data :
        seeder.add_entity(Room,1,data)
    seeder.execute()
    print("data Amenities upload")  
