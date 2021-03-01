import { TestBed, async, inject } from '@angular/core/testing';

import { ExpenseGuard } from './expense.guard';

describe('ExpenseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseGuard]
    });
  });

  it('should ...', inject([ExpenseGuard], (guard: ExpenseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
