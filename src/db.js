import { Year } from './schema/Year';
import { Budget } from './schema/Budget';
import { Earnings } from './schema/Earnings';
import { Expense } from './schema/Expense';

import RxDB from 'rxdb';
RxDB.plugin(require('pouchdb-adapter-idb'));

window.dbPromise = null;
window.yearCollection = null;
window.earningsCollection = null;
window.expenseCollection = null;
window.budgetCollection = null;

async function createDatabae() {
  if (!window.dbPromise) {
    window.dbPromise = await RxDB.create({
      name: 'budgetdb',
      adapter: 'idb',
      ignoreDuplicate: false
    });
  }
}

async function getYearCollection() {
  if (!window.yearCollection) {
    window.yearCollection = await window.dbPromise.collection({
      name: 'year',
      schema: Year,
    }); 
  }
}

async function getEarningsCollection() {
  if (!window.earningsCollection) {
    window.earningsCollection = await window.dbPromise.collection({
      name: 'earnings',
      schema: Earnings,
    });
  }
}

async function getExpenseCollection() {
  if (!window.expenseCollection) {
    window.expenseCollection = await window.dbPromise.collection({
      name: 'expense',
      schema: Expense,
    });
  }
}

async function getBudgetCollection() {
  if (!window.budgetCollection) {
    window.budgetCollection = await window.dbPromise.collection({
      name: 'budget',
      schema: Budget,
    });
  }
}

export async function connectDatabase() {
  await createDatabae();
  await getYearCollection();
  await getEarningsCollection();
  await getExpenseCollection();
  await getBudgetCollection();
}