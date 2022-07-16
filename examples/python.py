#!/usr/bin/env python3

from os import environ
from requests import Session

if __name__ == '__main__':
  __token=environ.get('GLOWBOT_API_TOKEN')
  assert __token != None, "failed to find api token environment variable!"
  try:
    req = Session()
    req.headers.update({ 'Accept': 'application/json' })
    res = req.get('https://glowbot.net/api/v1', params={ 'id': __token })
    res.raise_for_status()
    data = res.json()
    assert data['ok'] == True, data['error']
    print(data)
  except Exception as err:
    print(err)
    print("Failed to fetch api state!")
