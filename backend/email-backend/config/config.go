package config

import (
	"log"

	"github.com/joho/godotenv"
)

func LoadConfig() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Aviso: Arquivo .env não encontrado, usando variáveis do sistema.")
	}
}
