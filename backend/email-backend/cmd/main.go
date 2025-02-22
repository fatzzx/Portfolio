package main

import (
	"email-backend/config"
	"email-backend/internal/handlers"
	"os"

	"github.com/gin-gonic/gin"
)

func setupCORS() gin.HandlerFunc {
	allowedOrigin := os.Getenv("FRONTEND_ORIGIN")

	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	config.LoadConfig()

	r := gin.Default()
	r.Use(setupCORS())

	r.POST("/send-email", handlers.HandleSendEmail)

	r.Run(":8080")
}
