package main

import (
	"log"
	"net/http"
	"os"
)

func main() {

	env := determineEnv()
	log.Println("The environment is: " + env)

	host := ""
	port := ""

	if env == "localdev" { // local development
		host = ""
		port = "8080"
	} else if env == "dockerdev" { // local docker development
		host = ""
		port = "80"
	} else if env == "beta" { // beta environment
		host = "0.0.0.0"
		port = "80"
	}

	addr := host + ":" + port

	dir := http.Dir("../build")

	fs := http.FileServer(dir)

	http.Handle("/", fs)

	log.Println("Listening at " + addr + "...")
	http.ListenAndServe(addr, nil)
}

/*
	determines the value of the "env" environment variable
	returns: string, the value of the environment variable
*/
func determineEnv() string {

	log.Println("Determining environment.")

	env, envSet := os.LookupEnv("env")

	if !envSet {
		log.Fatalln("No environment variable set.")
	} else if env == "" {
		log.Fatalln("Environment variable set to an empty string.")
	}

	return env
}
