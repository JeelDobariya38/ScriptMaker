import os 
import subprocess 

if __name__ == "__main__":
	# For Compiling C++ Code
	# Script assumes that you have gpp installed & configured
	os.mkdir("bin")
	subprocess.run("g++ -o bin/app *.cpp")
	os.chdir("bin") # this might be vulnerable
	subprocess.run("./app")
	os.chdir("..") # this might be vulnerable
