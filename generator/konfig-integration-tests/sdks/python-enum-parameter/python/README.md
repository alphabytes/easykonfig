# python-enum-parameter<a id="python-enum-parameter"></a>

A simple API based for testing python-enum-parameter.


[![PyPI](https://img.shields.io/badge/PyPI-v1.0.0-blue)](https://pypi.org/project/python-enum-parameter/1.0.0)
[![README.md](https://img.shields.io/badge/README-Click%20Here-green)](https://github.com/konfig-dev/konfig/tree/main/python#readme)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](http://example.com/support)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Async](#async)
- [Raw HTTP Response](#raw-http-response)
- [Reference](#reference)
  * [`pythonenumparameterclient.test.fetch`](#pythonenumparameterclienttestfetch)

<!-- tocstop -->

## Requirements<a id="requirements"></a>

Python >=3.7

## Installation<a id="installation"></a>

```sh
pip install python-enum-parameter==1.0.0
```

## Getting Started<a id="getting-started"></a>

```python
from pprint import pprint
from python_enum_parameter import PythonEnumParameterClient, ApiException

pythonenumparameterclient = PythonEnumParameterClient(
    api_key="YOUR_API_KEY",
)

try:
    # Fetches a JSON value based on input parameter
    fetch_response = pythonenumparameterclient.test.fetch(
        problematic_parameter="enum",
    )
except ApiException as e:
    print("Exception when calling TestApi.fetch: %s\n" % e)
    pprint(e.body)
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```

## Async<a id="async"></a>

`async` support is available by prepending `a` to any method.

```python
import asyncio
from pprint import pprint
from python_enum_parameter import PythonEnumParameterClient, ApiException

pythonenumparameterclient = PythonEnumParameterClient(
    api_key="YOUR_API_KEY",
)


async def main():
    try:
        # Fetches a JSON value based on input parameter
        fetch_response = await pythonenumparameterclient.test.afetch(
            problematic_parameter="enum",
        )
    except ApiException as e:
        print("Exception when calling TestApi.fetch: %s\n" % e)
        pprint(e.body)
        pprint(e.headers)
        pprint(e.status)
        pprint(e.reason)
        pprint(e.round_trip_time)


asyncio.run(main())
```

## Raw HTTP Response<a id="raw-http-response"></a>

To access raw HTTP response values, use the `.raw` namespace.

```python
from pprint import pprint
from python_enum_parameter import PythonEnumParameterClient, ApiException

pythonenumparameterclient = PythonEnumParameterClient(
    api_key="YOUR_API_KEY",
)

try:
    # Fetches a JSON value based on input parameter
    fetch_response = pythonenumparameterclient.test.raw.fetch(
        problematic_parameter="enum",
    )
    pprint(fetch_response.headers)
    pprint(fetch_response.status)
    pprint(fetch_response.round_trip_time)
except ApiException as e:
    print("Exception when calling TestApi.fetch: %s\n" % e)
    pprint(e.body)
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```


## Reference<a id="reference"></a>
### `pythonenumparameterclient.test.fetch`<a id="pythonenumparameterclienttestfetch"></a>

Provide an input parameter to receive a JSON value with properties.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
fetch_response = pythonenumparameterclient.test.fetch(
    problematic_parameter="enum",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### problematic_parameter: [`ProblematicEnum`](./python_enum_parameter/type/.py)<a id="problematic_parameter-problematicenumpython_enum_parametertypepy"></a>

An enum parameter that is problematic

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/simple-endpoint` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This Python package is automatically generated by [Konfig](https://konfigthis.com)