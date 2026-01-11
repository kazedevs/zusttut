import { create } from "zustand";

export interface Habit {
    id: string,
    name: string,
    frequency: string,
    completedDates: string[],
    createdAt: string,
}

interface HabitStore {
    habits: Habit[];
    addHabit: (name: string, frequency: "daily" | "weekly") => void;
}

const useHabitStore = create<HabitStore>()((set) => {
    return {
        habits: [],
        addHabit: (name, frequency) => set((state) => {
            return {
                habits: [
                    ...state.habits, {
                        id: Math.ceil(Math.random() * 10000).toString(),
                        name,
                        frequency,
                        completedDates: [],
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        })
    };
});

export default useHabitStore;