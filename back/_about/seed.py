from django_seed import Seed
from .models import *


def run():
    seeder = Seed.seeder()
    
    resort_data = [
    {
        "title": "LUXURY HOTEL AND RESORT",
        "subtitle": "LUXURY BEST HOTEL IN CITY CALIFORNIA, USA",
        "content_1": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
        "content_2": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
        "street":"102/B, Dream Street, New Elephant Road, Resort.",
        "county":"Dhanmondi Dhaka - 1212",
        "image": "image/inner/about-thumb.jpg",
    },

] 
    for data in resort_data :
        seeder.add_entity(Resort,1,data)
    seeder.execute()
    print("data Resort upload")  


    manager_data = [
    {
        "title": "LUXURY BEST HOTEL IN CITY CALIFORNIA, USA",
        "quotes": "Model. Appropriately create interactive infrastructures after main Holisticly facilitate stand-alone inframe of the world",
        "image": "image/home/action-img.png",
        "description": "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
        "manager_img": "image/home/call-do-action-img.png",
        "manager_name": "John D. Alexon",
        "video": "https://youtu.be/fFDyoI73viQ?si=GbDzAagjoa_0Nv2x",
    },

] 
    for data in manager_data :
        seeder.add_entity(Manager,1,data)
    seeder.execute()
    print("data manager upload")  


    team_data = [
    {
        "name": "Valentina Kerry",
        "role":"General Manager",
        "team_image":"image/inner/member-1.jpg",
        "email":"example@gmail.com",
    },
    {
        "name": "Samantha Shen",
        "role":"General Manager",
        "team_image":"image/inner/member-3.jpg",
        "email":"example@gmail.com",
    },
    {
        "name": "Leary Mart",
        "role":"Product Manager",
        "team_image":"image/inner/member-2.jpg",
        "email":"example@gmail.com",
    },
    {
        "name": "Amanda Z. Web",
        "role":"Marketing Manger",
        "team_image":"image/inner/member-1.jpg",
        "email":"example@gmail.com",
    },
    {
        "name": "Henry K. Hamar",
        "role":"Product Manager",
        "team_image":"image/inner/member-4.jpg",
        "email":"example@gmail.com",
    },
    {
        "name": "Jessica Barros",
        "role":"Marketing Manager",
        "team_image":"image/inner/member-6.jpg",
        "email":"example@gmail.com",
    },

] 
    for data in team_data :
        seeder.add_entity(Team,1,data)
    seeder.execute()
    print("data Team upload")  
