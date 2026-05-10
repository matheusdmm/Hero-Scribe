package handler

import (
	"encoding/json"
	"net/http"

	"github.com/matheusdmm/dnd-character-creator/data"
)

func RacesHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(data.Races)
}
