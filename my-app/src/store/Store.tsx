import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}
  
interface HabitState {
    habits: Habit[];
    // isLoading: boolean;
    // error: string | null;
    // addHabit: (name: string, frequency: "daily" | "weekly") => void;
    // removeHabit: (id: string) => void;
    // toggleHabit: (id: string, date: string) => void;
    // fetchHabits: () => Promise<void>;
       addHabit: (name: string, frequency: "daily" | "weekly") => void;

  }

  const useHabbitStore = create<HabitState>()((set)=>{
    return {
        habits:[],
        addHabit:(name,frequency)=>
        set((state)=>{
          return {
            habits:[...state.habits,{
              id: Date.now().toString(),
              name,
              frequency,
              completedDates: [],
              createdAt: new Date().toISOString(),
            }]
          }
        })
    }
  })

  export default useHabbitStore;