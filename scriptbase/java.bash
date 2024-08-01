# !/bin/bash 

# For Compiling Java Code
# Script assumes that you have Java JDK installed & configured
mkdir -p "bin"
javac -d bin *.java
cd "bin"
java Main
cd ..
jar cf app.jar -C bin .
