export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = String(name)
    this._length = Number(length)
    this._students = Array(students)
  }
  get_name(){
    return this._name
  }
  set_name(val){

  }
  get_length(){
    return this._length
  }
  get_students(){
    return this._students
  }
}
