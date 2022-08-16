interface Iperson2 {
  name: string,
  age?: number,
}

interface Ikorean extends Iperson2 {
  city: string
}

const k: Ikorean = {
  name: 'junho',
  age: 29,
  city: 'seoul'
}

