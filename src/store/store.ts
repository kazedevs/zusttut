import { create } from "zustand";
import { persist } from "zustand/middleware";

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
    removeHabit: (id: string) => void;
    toggleHabit: (id: string, data: string) => void;
}

const useHabitStore = create<HabitStore>()(persist((set) => {
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
        }),

        removeHabit: (id) => set((state) => {
            return {
                habits: state.habits.filter((habit) => habit.id !== id)
            }
        }),

        toggleHabit: (id, date) => set((state) => {
            return {
                habits: state.habits.map((habit) =>
                    habit.id === id ? {
                        ...habit,
                        completedDates: habit.completedDates.includes(date)
                            ? habit.completedDates.filter((d) => d !== date)
                            : [...habit.completedDates, date],
                    }
                        : habit
                )
            }
        }),

    };
}, {
    name: "habits-local",
}));

export default useHabitStore;