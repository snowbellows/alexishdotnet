convert "$1".jpg -resize 640x640 "$1"-sm.jpg
convert "$1".jpg -resize 768x768 "$1"-md.jpg
convert "$1".jpg -resize 1024x1024 "$1"-lg.jpg
convert "$1".jpg -resize 1920x1920 "$1"-xl.jpg
