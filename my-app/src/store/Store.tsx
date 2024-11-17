import { create } from "zustand";
import { createJSONStorage, devtools ,persist} from "zustand/middleware";

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
       removeHabit :(id:string)=>void;

  }

  // const useHabbitStore = create<HabitState>()((set)=>{
  //   return {
  //       habits:[],
  //       addHabit:(name,frequency)=>
  //       set((state)=>{
  //         return {
  //           habits:[...state.habits,{
  //             id: Date.now().toString(),
  //             name,
  //             frequency,
  //             completedDates: [],
  //             createdAt: new Date().toISOString(),
  //           }]
  //         }
  //       }),
  //       removeHabit:(id)=>set((state)=>({
  //         habits: state.habits.filter((habit)=>habit.id !==id),
  //       }
  //       )),
     
  //   }
  // })

  const useHabbitStore = create<HabitState>()(
   
         persist(
      (set, get) => ({
        habits: [],
        isLoading: false,
        error: null,
        addHabit: (name, frequency) =>
          set((state) => ({
            habits: [
              ...state.habits,
              {
                id: Date.now().toString(),
                name,
                frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
              },
            ],
          })),
        removeHabit: (id) =>
          set((state) => ({
            habits: state.habits.filter((habit) => habit.id !== id),
          })),
      }),
          {
            name: "habit-storage",
            storage: createJSONStorage(() => localStorage),
          }
        )
    
  );

  export default useHabbitStore;