# Flippers
Fun with the Old School Runescape Grand Exchange.

Example usage:
```go
package main

import (
	"github.com/nokaa/flippers"
	"log"
)

func main() {
	item, err := GetItem("1519")
	if err != nil {
		log.Println(err)
		return
	}
	log.Println(item)
}
```
