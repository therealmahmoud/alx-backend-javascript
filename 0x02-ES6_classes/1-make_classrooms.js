import ClassRoom from "./0-classroom.js"

export default function initializeRooms() {
  return `[
    ${ClassRoom.name} { _maxStudentsSize: 19 },
    ${ClassRoom.name} { _maxStudentsSize: 20 },
    ${ClassRoom.name} { _maxStudentsSize: 34 }
]`
}
