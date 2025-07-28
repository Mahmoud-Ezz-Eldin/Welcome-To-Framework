@echo off
echo Installing packages...
npm i bootstrap
npm i @fortawesome/fontawesome-free
ng s -o
for %n in (home,about) do g c %n
echo Packages installed successfully ENG/Ezz