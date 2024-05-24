import django
django.setup()
from _room import seed as room
from _hero import seed as hero
from _about import seed as about
from _blog import seed as blog

if __name__ == "__main__":
   # room.run()
   hero.run()
   about.run()
   blog.run()

