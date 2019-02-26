export const Budget = {
  version: 0,
  type: 'object',
  properties: {
    year: {
      "type": "string",
    },
    month: {
      "type": "string",
    },
    earnings: {
      "type": "array",
      "ref": 'earnings',
      "items": {
        "type": "string",
      }
    },
    expense: {
      "type": "array",
      "ref": 'expense',
      "items": {
        "type": "string",
      }
    }
  },
}