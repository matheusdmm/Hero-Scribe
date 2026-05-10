package main

import (
	"fmt"
	"log"
	"net/http"

	handler "github.com/matheusdmm/dnd-character-creator"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/classes", handler.ClassesHandler)
	mux.HandleFunc("/api/races", handler.RacesHandler)
	mux.HandleFunc("/api/calculate", handler.CalculateHandler)

	fmt.Println("API running on http://localhost:3000")
	log.Fatal(http.ListenAndServe(":3000", mux))
}
