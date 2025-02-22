package handlers

import (
	"email-backend/internal/models"
	"email-backend/internal/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func HandleSendEmail(c *gin.Context) {
	var request models.EmailRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Dados inválidos"})
		return
	}

	err := services.SendEmail(request)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao enviar e-mail"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "E-mail enviado com sucesso!"})
}
