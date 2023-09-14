const validateProduct= {
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: '5'
}

const valideResponse = {
  id: 1,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
}

// Mocks de validação de produto

const withoutName = { name: '', price: '30 peças de ouro', orderId: '5' }
const withoutPrice = { name: 'Martelo de Thor', price: '', orderId: '5' }
const withoutOrderId = { name: 'Martelo de Thor', price: '30 peças de ouro', orderId: '' }

const withoutStringName = { name: 1, price: '30 peças de ouro', orderId: '5' }
const withoutStringPrice = { name: 'Martelo de Thor', price: 1, orderId: '5' }

const nameLength = { name: 'Ma', price: '30 peças de ouro', orderId: '5' }
const priceLength = { name: 'Martelo de Thor', price: '30', orderId: '5' }


export default {
  validateProduct,
  valideResponse,
  withoutName,
  withoutPrice,
  withoutOrderId,
  withoutStringName,
  withoutStringPrice,
  nameLength,
  priceLength
}