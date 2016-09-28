package flippers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

// The base url for the OSBuddy API.
var BaseUrl = "https://api.rsbuddy.com/grandExchange?a=guidePrice&i="

// TODO: Since golang has a weak type system, it may not be worth
// attempting to enforce type constraints in this situation.
type ItemId string

// A struct for storing data related to an item on the Grand
// Exchange. This struct matches with the JSON read from the
// OSBuddy API.
type Item struct {
	Overall         int
	Buying          int
	BuyingQuantity  int
	Selling         int
	SellingQuantity int
}

// Reads the Grand Exchange information for the item with id `id` into
// an `Item` struct.
func GetItem(id ItemId) (Item, error) {
	// Connect to the api
	resp, err := http.Get(baseUrl + string(id))
	if err != nil {
		return Item{}, err
	}
	defer resp.Body.Close()

	// Read all data from the api into `body`
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return Item{}, err
	}

	// Parse the JSON read from the API into the `Item` struct
	var item Item
	err = json.Unmarshal(body, &item)
	return item, err
}
