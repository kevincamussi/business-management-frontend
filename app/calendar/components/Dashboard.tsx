/**
 * Dashboard: main page controlling holidays state.
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import { getHolidays, type Holiday } from "../services/holidays.service";
import { HolidayForm } from "../components";
import { useSuggestions } from "../hooks/useSuggestions";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const HolidayCalendar = dynamic(() => import("../components/HolidayCalendar"), {
  ssr: false,
});

const Dashboard = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const { options: employeeSuggestions, reload: reloadEmployees } =
    useSuggestions("employee_name");
  const { options: departmentSuggestions, reload: reloadDepartments } =
    useSuggestions("department");

  const loadHolidays = useCallback(async (): Promise<void> => {
    const data = await getHolidays();
    setHolidays(data);
  }, []);

  const loadAll = useCallback(async (): Promise<void> => {
    await loadHolidays();
    await Promise.all([reloadEmployees(), reloadDepartments()]);
  }, [loadHolidays, reloadEmployees, reloadDepartments]);

  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0;";
    router.push("/login");
  };

  useEffect(() => {
    const run = async () => {
      await loadAll();
    };
    run();
  }, [loadAll]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-200 py-4">
      <div
        className="w-full 
         lg:px-10 
        
        "
      >
        <header className="justify-center text-center  flex flex-col md:flex-row md:justify-between">
          <h1 className="text-3xl font-bold mb-6">Holidays Management</h1>
          <button
            onClick={handleLogout}
            className="
              bg-red-500 
              hover:bg-red-600 
              text-white 
              font-semibold 
              text-sm md:text-base 
              px-3 md:px-4
              py-2
              mx-auto
              md:mx-0
              md:py-0 
              mb-5
              rounded 
              transition-all
              cursor-pointer"
          >
            Logout
          </button>
        </header>
        <main>
          <HolidayForm
            onAdd={loadAll}
            employeeSuggestions={employeeSuggestions}
            departmentSuggestions={departmentSuggestions}
          />
          <HolidayCalendar
            holidays={holidays}
            onDelete={loadAll}
            reloadEmployees={reloadEmployees}
            reloadDepartments={reloadDepartments}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
