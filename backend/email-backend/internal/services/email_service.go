package services

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"email-backend/internal/models"
)

type ResendEmail struct {
	From    string `json:"from"`
	To      string `json:"to"`
	Subject string `json:"subject"`
	Text    string `json:"text"`
}

func SendEmail(request models.EmailRequest) error {
	emailData := ResendEmail{
		From:    "onboarding@resend.dev",
		To:      os.Getenv("EMAIL_DESTINO"),
		Subject: "Novo Contato",
		Text:    fmt.Sprintf("De: %s (%s)\n\n%s", request.Name, request.Email, request.Message),
	}

	jsonData, _ := json.Marshal(emailData)

	req, _ := http.NewRequest("POST", "https://api.resend.com/emails", bytes.NewBuffer(jsonData))
	req.Header.Set("Authorization", "Bearer "+os.Getenv("RESEND_API_KEY"))
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("erro ao enviar e-mail: status %d", resp.StatusCode)
	}

	return nil
}
