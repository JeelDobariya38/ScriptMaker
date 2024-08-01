import os 
import subprocess 

if __name__ == "__main__":
	# For Compiling Java Code
	# Script assumes that you have Java JDK installed & configured
	os.mkdir("bin")
	subprocess.run("javac -d bin *.java")
	os.chdir("bin") # this might be vulnerable
	subprocess.run("java Main")
	os.chdir("..") # this might be vulnerable
	subprocess.run("jar cf app.jar -C bin .")
