
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

const dailyMessages = [
  "Ny uke, nye muligheter! Små steg hver dag = store drømmer oppfylt. 🚀",
  "Pust dypt – du har trent for dette. Du er klar, sterk og fokusert! 💪",
  "Kjør smart, pust med magen, og husk: Ditt løp, din fart, din ro. 🏎️🔥",
  "Tenk: 'Jeg er rask. Jeg er rolig. Jeg er fokusert.' 🎯",
  "STOPP-planen husker du? Pust – Observer – Planlegg. Du styrer løpet! 🧠🏁",
  "Hva var din beste læring i dag? Små seire bygger store mestere! 🏆",
  "Se for deg en perfekt start. Se for deg en perfekt runde. Du kan dette! 🎥✨",
  "Kjør med glede! Smil under hjelmen. 😄🏎️",
  "Du vinner eller du lærer. Alt bygger deg sterkere! 💥",
  "Forbered deg i hodet: Du er rask, rolig og KLAR! 🏁🔥",
  "Takk deg selv for innsatsen denne uka. Du er på vei mot drømmen din! 🙌"
];

const tasksByDay = {
  Monday: ["Sett ukas mål", "Visualiseringstrening"],
  Tuesday: ["Gokart-trening"],
  Wednesday: ["Reaksjonstrening", "Kjernestyrke"],
  Thursday: ["STOPP-plan øvelse", "Lett kondisjonstrening"],
  Friday: ["Visualisering før helg", "Selvprat boost"],
  Saturday: ["Gokart-trening eller løp"],
  Sunday: ["Race Journal evaluering", "Lett restitusjon"]
};

export default function RacingreiseApp() {
  const [message, setMessage] = useState("Klikk for å få dagens boost!");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [notes, setNotes] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    setToday(day);
  }, []);

  function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * dailyMessages.length);
    setMessage(dailyMessages[randomIndex]);
  }

  function toggleTask(task) {
    setCompletedTasks(prev => 
      prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task]
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-700">
        RacingMind 🚀
      </h1>
      <Card className="max-w-md w-full shadow-xl">
        <CardContent className="p-6">
          <p className="text-lg mb-4 text-center">{message}</p>
          <Button onClick={getRandomMessage} className="w-full mb-6">
            Få Dagens Boost ✨
          </Button>
          <h2 className="text-2xl font-semibold mb-2">📅 Dagens Oppgaver ({today})</h2>
          <div className="mb-4">
            {tasksByDay[today]?.map((task, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={completedTasks.includes(task)}
                  onChange={() => toggleTask(task)}
                  className="mr-2"
                />
                <span>{task}</span>
              </div>
            )) || <p>Hviledag 🚗</p>}
          </div>
          {tasksByDay[today]?.includes("Visualiseringstrening") ||
          tasksByDay[today]?.includes("STOPP-plan øvelse") ||
          tasksByDay[today]?.includes("Race Journal evaluering") ? (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">📝 Mental Logg</h2>
              <Textarea
                placeholder="Hva lærte du i dag? Hvordan følte du deg?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
