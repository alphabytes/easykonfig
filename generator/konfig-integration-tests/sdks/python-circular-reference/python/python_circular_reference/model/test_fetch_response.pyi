# coding: utf-8

"""
    python-circular-reference API

    A simple API based for testing python-circular-reference.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_circular_reference import schemas  # noqa: F401


class TestFetchResponse(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "required",
        }
        
        class properties:
        
            @staticmethod
            def required() -> typing.Type['TestInfiniteLoop']:
                return TestInfiniteLoop
        
            @staticmethod
            def value() -> typing.Type['TestInfiniteLoop']:
                return TestInfiniteLoop
            
            
            class array(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    
                    @staticmethod
                    def items() -> typing.Type['Item']:
                        return Item
            
                def __new__(
                    cls,
                    arg: typing.Union[typing.Tuple['Item'], typing.List['Item']],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'array':
                    return super().__new__(
                        cls,
                        arg,
                        _configuration=_configuration,
                    )
            
                def __getitem__(self, i: int) -> 'Item':
                    return super().__getitem__(i)
            __annotations__ = {
                "required": required,
                "value": value,
                "array": array,
            }
    
    required: 'TestInfiniteLoop'
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["required"]) -> 'TestInfiniteLoop': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["value"]) -> 'TestInfiniteLoop': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["array"]) -> MetaOapg.properties.array: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["required", "value", "array", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["required"]) -> 'TestInfiniteLoop': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["value"]) -> typing.Union['TestInfiniteLoop', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["array"]) -> typing.Union[MetaOapg.properties.array, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["required", "value", "array", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        required: 'TestInfiniteLoop',
        value: typing.Union['TestInfiniteLoop', schemas.Unset] = schemas.unset,
        array: typing.Union[MetaOapg.properties.array, list, tuple, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'TestFetchResponse':
        return super().__new__(
            cls,
            *args,
            required=required,
            value=value,
            array=array,
            _configuration=_configuration,
            **kwargs,
        )

from python_circular_reference.model.item import Item
from python_circular_reference.model.test_infinite_loop import TestInfiniteLoop