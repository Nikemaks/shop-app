export interface ListItemsInterface {
  title: any,
  date: string,
  price: number,
  id?: number,
  isDone: boolean,
  count: number,
  type: string
}

export enum TypeSpending {
  FOOD = 'Food',
  MEDICAL = "Medical",
  CAR = "Car",
  PET = "Pet",
  HOUSEHOLD_CHEMICALS = "Household Chemicals",
  CLOTHES = "Clothes"
}

export const TYPE_SPENDING = [
  TypeSpending.FOOD,
  TypeSpending.MEDICAL,
  TypeSpending.CAR,
  TypeSpending.PET,
  TypeSpending.HOUSEHOLD_CHEMICALS,
  TypeSpending.CLOTHES
]
