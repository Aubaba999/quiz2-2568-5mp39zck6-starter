import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};

  const [fnameerror, setNameError] = useState<string | null>(null);
  const [amounterror, setAmountError] = useState<string | null>(null);
  const [categoryerror, setCategoryError] = useState<string | null>(null);  

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0
  
  const inputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }
  const selectAmount = (value: number | undefined) => {
    if (value !== undefined) {
      setAmount(value);
    } else {
      setAmount(0);
    } 
  }
  const selectCategory = (value: string | null) => {
    setCategory(value);
  }
  const catagory = ["Food", "Transport", "Entertainment"];

  const computeTotal = (expenses: { amount: number | string }[]) => {
    return expenses.reduce((total, expense) => {
      let amountNumber = typeof expense.amount === 'string' ? parseFloat(expense.amount) : expense.amount;
      return total + (isNaN(amountNumber) ? 0 : amountNumber);
    }, 0);
  };
  return {
   
  };
}
