@echo off 

REM For Compiling Java Code
REM Script assumes that you have Java JDK installed & configured
mkdir bin
javac -d bin *.java
cd bin
java Main
cd ..
jar cf app.jar -C bin .
