@echo off 

REM For Compiling C++ Code
REM Script assumes that you have gpp installed & configured
mkdir bin
g++ -o bin/app *.cpp
cd bin
./app
cd ..
