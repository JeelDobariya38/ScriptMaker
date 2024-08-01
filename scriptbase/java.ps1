# For Compiling Java Code
# Script assumes that you have Java JDK installed & configured
New-Item -Path "bin" -ItemType Directory
javac -d bin *.java
Set-Location -Path "bin"
java Main
Set-Location -Path ..
jar cf app.jar -C bin .
