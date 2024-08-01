# !/bin/bash 

# For Compiling C++ Code
# Script assumes that you have gpp installed & configured
mkdir -p "bin"
g++ -o bin/app *.cpp
cd "bin"
./app
cd ..
