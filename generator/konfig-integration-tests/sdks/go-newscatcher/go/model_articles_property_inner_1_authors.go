/*
NewsCatcher-V3 Production API

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

API version: Beta-3.0.0
Contact: maksym@newscatcherapi.com
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package newscatcherapi

import (
	"encoding/json"
	"fmt"
)

// ArticlesPropertyInner1Authors - struct for ArticlesPropertyInner1Authors
type ArticlesPropertyInner1Authors struct {
	Authors *Authors
}

// AuthorsAsArticlesPropertyInner1Authors is a convenience function that returns Authors wrapped in ArticlesPropertyInner1Authors
func AuthorsAsArticlesPropertyInner1Authors(v *Authors) ArticlesPropertyInner1Authors {
	return ArticlesPropertyInner1Authors{
		Authors: v,
	}
}


// Unmarshal JSON data into one of the pointers in the struct
func (dst *ArticlesPropertyInner1Authors) UnmarshalJSON(data []byte) error {
	var err error
	match := 0
	// try to unmarshal data into Authors
	err = newStrictDecoder(data).Decode(&dst.Authors)
	if err == nil {
		jsonAuthors, _ := json.Marshal(dst.Authors)
		if string(jsonAuthors) == "{}" { // empty struct
			dst.Authors = nil
		} else {
			match++
		}
	} else {
		dst.Authors = nil
	}

	if match > 1 { // more than 1 match
		// reset to nil
		dst.Authors = nil

		return fmt.Errorf("data matches more than one schema in oneOf(ArticlesPropertyInner1Authors)")
	} else if match == 1 {
		return nil // exactly one match
	} else { // no match
		return fmt.Errorf("data failed to match schemas in oneOf(ArticlesPropertyInner1Authors)")
	}
}

// Marshal data from the first non-nil pointers in the struct to JSON
func (src ArticlesPropertyInner1Authors) MarshalJSON() ([]byte, error) {
	if src.Authors != nil {
		return json.Marshal(&src.Authors)
	}

	return nil, nil // no data in oneOf schemas
}

// Get the actual instance
func (obj *ArticlesPropertyInner1Authors) GetActualInstance() (interface{}) {
	if obj == nil {
		return nil
	}
	if obj.Authors != nil {
		return obj.Authors
	}

	// all schemas are nil
	return nil
}

type NullableArticlesPropertyInner1Authors struct {
	value *ArticlesPropertyInner1Authors
	isSet bool
}

func (v NullableArticlesPropertyInner1Authors) Get() *ArticlesPropertyInner1Authors {
	return v.value
}

func (v *NullableArticlesPropertyInner1Authors) Set(val *ArticlesPropertyInner1Authors) {
	v.value = val
	v.isSet = true
}

func (v NullableArticlesPropertyInner1Authors) IsSet() bool {
	return v.isSet
}

func (v *NullableArticlesPropertyInner1Authors) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArticlesPropertyInner1Authors(val *ArticlesPropertyInner1Authors) *NullableArticlesPropertyInner1Authors {
	return &NullableArticlesPropertyInner1Authors{value: val, isSet: true}
}

func (v NullableArticlesPropertyInner1Authors) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArticlesPropertyInner1Authors) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

