# For Compiling C++ Code
# Script assumes that you have gpp installed & configured
New-Item -Path "bin" -ItemType Directory
g++ -o bin/app *.cpp
Set-Location -Path "bin"
./app
Set-Location -Path ..
