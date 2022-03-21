#!/usr/bin/python3
""" module of budget endpoints """
from fastapi import APIRouter, status, HTTPException
from models import storage
from models.budget import Budget
from schemas.budget_schema import BudgetSchema, BudgetCreate, BudgetUpdate
from typing import List, Dict, Optional
from app.routes.category import get_one_category

budget = APIRouter()


@budget.get(
    '/budgets-all',
    tags=['budgets'],
    status_code=status.HTTP_200_OK,
    response_model=List[BudgetSchema]
)
def get_all_budgets():
    """Gets all budgets
    returns a list of dictionary representation of Budget"""
    budgets = storage.all(Budget)
    if not budgets:
        return None
    return [budget for budget in budgets.values()]


@budget.get(
    '/budgets/{id}',
    tags=['budgets'],
    status_code=status.HTTP_200_OK,
    response_model=BudgetSchema
)
def get_budget(id: int):
    """Get a budget by id
    returns the dictionary representation of a User"""
    budget = storage.get(Budget, id)
    if not budget:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Budget not found")
    return budget


@budget.post(
    '/budget',
    tags=['budgets'],
    status_code=status.HTTP_201_CREATED,
    response_model=BudgetSchema
)
def create_budget(input_budget: BudgetCreate):
    """Create a new budget in database
    returns: dictionary representation of created Budget"""
    dictionary = input_budget.dict()
    budgets = get_all_budgets()
    if budgets:
        for budget in budgets:
            if dictionary['category_id'] == budget.category_id:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Budget already exists for that category (id:\
                    {budget.category_id}, name: {budget.category.name})"
                )
    get_one_category(input_budget.category_id)
    new_budget = Budget(**dictionary)
    new_budget.save()
    return new_budget


@ budget.put(
    '/budget/{id}',
    tags=['budgets'],
    status_code=200,
    response_model=BudgetSchema
)
def update_budget(
        id: int,
        transaction_data: BudgetUpdate
):
    """Update a budget"""
    dictionary = transaction_data.dict(exclude_unset=True)
    if dictionary is None:
        raise HTTPException(status_code=400, detail="Not a JSON")
    budget = storage.get(Budget, id)
    if budget is None:
        raise HTTPException(status_code=404, detail="Budget Not found")

    [setattr(budget, key, value) for key, value in dictionary.items()]
    budget.save()
    return budget
