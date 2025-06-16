"use client";
import Image from "next/image";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Type definitions
type Tower = {
  id: string;
  name: string;
};

type Floor = {
  id: number;
  name: string;
};

type Apartment = {
  id: number;
  area: string;
  type: string;
  rooms: number;
  image: string;
};

const towers: Tower[] = [
  { id: "A", name: "Tower A" },
  { id: "B", name: "Tower B" },
  { id: "C", name: "Tower C" },
];

const floors: Floor[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Floor ${15 - i}`,
}));

const apartments: Apartment[] = [
  {
    id: 1,
    area: "120 sqm",
    type: "2BHK Premium",
    rooms: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    area: "150 sqm",
    type: "3BHK Deluxe",
    rooms: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    area: "180 sqm",
    type: "4BHK Penthouse",
    rooms: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    area: "100 sqm",
    type: "1BHK Studio",
    rooms: 1,
    image: "https://via.placeholder.com/150",
  },
];

export default function FloorSelector() {
  const [selectedTower, setSelectedTower] = useState<Tower | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );

  const handleReset = (level: "tower" | "floor" | "apartment") => {
    if (level === "tower") {
      setSelectedTower(null);
      setSelectedFloor(null);
      setSelectedApartment(null);
    } else if (level === "floor") {
      setSelectedFloor(null);
      setSelectedApartment(null);
    } else if (level === "apartment") {
      setSelectedApartment(null);
    }
  };

  return (
    <div className="p-4 space-y-6 max-w-5xl mx-auto">
      {!selectedTower && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {towers.map((tower) => (
            <Card
              key={tower.id}
              onClick={() => setSelectedTower(tower)}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center font-bold text-xl">
                {tower.name}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTower && !selectedFloor && (
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => handleReset("tower")}
            />
            <h2 className="text-2xl font-semibold">{selectedTower.name}</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {floors.map((floor) => (
              <Card
                key={floor.id}
                onClick={() => setSelectedFloor(floor)}
                className="cursor-pointer text-center hover:bg-gray-100 transition"
              >
                <CardContent className="p-4">{floor.name}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {selectedFloor && !selectedApartment && (
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => handleReset("floor")}
            />
            <h2 className="text-2xl font-semibold">
              {selectedTower?.name} – {selectedFloor.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {apartments.map((apt) => (
              <motion.div
                key={apt.id}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Card
                  onClick={() => setSelectedApartment(apt)}
                  className="cursor-pointer overflow-hidden"
                >
                  <div className="relative">
                    <motion.img
                      src={apt.image}
                      alt="Apartment Layout"
                      className="w-full h-40 object-cover transition-transform"
                    />
                    <div className="p-4 bg-white">
                      <p className="font-semibold">{apt.type}</p>
                      <p className="text-sm text-gray-600">Area: {apt.area}</p>
                      <p className="text-sm text-gray-600">
                        Rooms: {apt.rooms}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {selectedApartment && (
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => handleReset("apartment")}
            />
            <h2 className="text-2xl font-semibold">Apartment Details</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <Image
              src={selectedApartment.image}
              alt="Apartment Detail"
              className="w-full rounded-lg shadow"
            />
            <div className="space-y-2 text-lg">
              <p>
                <strong>Area:</strong> {selectedApartment.area}
              </p>
              <p>
                <strong>Type:</strong> {selectedApartment.type}
              </p>
              <p>
                <strong>Rooms:</strong> {selectedApartment.rooms}
              </p>
              <p>
                <strong>Tower:</strong> {selectedTower?.name}
              </p>
              <p>
                <strong>Floor:</strong> {selectedFloor?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
