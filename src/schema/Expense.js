export const Expense = {
  version: 0,
  type: 'object',
  properties: {
    name: {
      "type": "string",
      "primary": true,
    },
    type: {
      "type": "string",
      "default": "other"
    },
    description: {
      "type": "string"
    },
    value: {
      "type": "number"
    }
  },
}