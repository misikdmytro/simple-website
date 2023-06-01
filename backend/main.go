package main

import "github.com/gofiber/fiber/v2"

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Age  int    `json:"age"`
}

var users = []User{
	{ID: 1, Name: "John", Age: 20},
	{ID: 2, Name: "Jane", Age: 21},
	{ID: 3, Name: "Janet", Age: 22},
}

func main() {
	app := fiber.New()

	app.Static("/", "./public")

	api := app.Group("/api")
	{
		api.Get("/users", func(c *fiber.Ctx) error {
			return c.JSON(users)
		})
	}

	if err := app.Listen(":3000"); err != nil {
		panic(err)
	}
}
